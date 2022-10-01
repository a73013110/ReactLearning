import { Button, Table, Modal, InputRef, Form, FormInstance, Input } from 'antd'
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table'
import axios from 'axios'
import { useContext, useEffect, useRef, useState } from 'react'
import { ICategory } from '../../../interface/news/ICategory';
import React from 'react';

const { confirm } = Modal;

export default function NewsCategory() {
    const [dataSource, setDataSource] = useState<ICategory[]>([])
    const EditableContext = React.createContext<FormInstance<any> | null>(null);

    useEffect(() => {
        axios.get("/categories").then(res => {
            setDataSource(res.data);
        })
    }, [])

    // 資料異動後儲存功能
    const handleSave = (record: ICategory) => {
        // console.log(record);
        setDataSource(dataSource.map(item => {
            if (item.id === record.id) {
                return {
                    id: item.id,
                    title: record.title,
                    value: record.title
                }
            }
            return item;
        }));

        axios.patch(`/categories/${record.id}`, {
            title: record.title,
            value: record.title
        })
    }

    // 定義Table欄位
    const columns: ColumnsType<ICategory> = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (id) => {
                return <b>{id}</b>
            }
        },
        {
            title: '欄位名稱',
            dataIndex: 'title',
            // 定義欄位資料異動
            onCell: (record: ICategory) => ({
                record,
                editable: true,
                dataIndex: "title",
                title: "欄位名稱",
                handleSave,
            })
        },
        {
            title: '操作',
            render: (item: ICategory) => {
                return <div>
                    <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => {
                        confirm({
                            title: "你確定要刪除?",
                            icon: <ExclamationCircleOutlined />,
                            onOk() {
                                setDataSource(dataSource.filter(data => data.id !== item.id));
                                axios.delete(`/categories/${item.id}`);
                            }
                        });
                    }}></Button>
                </div>
            }
        }
    ];

    interface EditableRowProps {
        index: number;
    }

    // 定義Table列，創建編輯所使用的Form，並使用父子通信將Form參考傳入子元素
    const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
        const [form] = Form.useForm();
        return (
            <Form form={form} component={false}>
                <EditableContext.Provider value={form}>
                    <tr {...props} />
                </EditableContext.Provider>
            </Form>
        );
    };

    interface EditableCellProps {
        title: React.ReactNode;
        editable: boolean;
        children: React.ReactNode;
        dataIndex: keyof ICategory;
        record: ICategory;
        handleSave: (record: ICategory) => void;
    }

    // 定義Cell
    const EditableCell: React.FC<EditableCellProps> = ({
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }) => {
        const [editing, setEditing] = useState(false);  // 紀錄是否編輯狀態
        const inputRef = useRef<InputRef>(null);        // 編輯內容的FomrItem參考
        const form = useContext(EditableContext)!;      // 取得父組件傳過來的Form參考

        // 若編輯狀態改變將重複執行
        useEffect(() => {
            // 若為編輯狀態，將focus在FormItem中
            if (editing) {
                inputRef.current!.focus();
            }
        }, [editing]);

        const toggleEdit = () => {
            setEditing(!editing);   // 設定是否編輯狀態
            form.setFieldsValue({ [dataIndex]: record[dataIndex] });    // 設定編輯的值至FormItem中
        };

        const save = async () => {
            try {
                // 驗證並取得form資料
                const values = await form.validateFields();

                toggleEdit();
                handleSave({ ...record, ...values });   // 儲存資料的主要方法!!!
            } catch (errInfo) {
                console.log('Save failed:', errInfo);
            }
        };

        // 先取得原本的cell內容
        let childNode = children;

        // 若為可編輯的Cell
        if (editable) {
            // 是否為編輯模式 ? 顯示FormItem : 顯示原本Cell內容
            childNode = editing ? (
                <Form.Item
                    style={{ margin: 0 }}
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ]}
                >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            ) : (
                <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                    {children}
                </div>
            );
        }

        return <td {...restProps}>{childNode}</td>;
    };

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 10 }} rowKey={item => item.id}
                // 覆蓋默認的table元素
                components={{
                    body: {
                        row: EditableRow,
                        cell: EditableCell
                    }
                }} />
        </div>
    )
}
