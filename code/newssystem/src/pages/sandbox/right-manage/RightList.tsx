import { Button, Table, Tag, Modal, Popover, Switch } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const { confirm } = Modal;

interface IDataType {
    id?: number,
    rightId?: number,
    key: string,
    title: string,
    pagepermission?: number,
    grade: number,
    children?: IDataType[] | undefined,
}

export default function RightList() {
    const [dataSource, setDataSource] = useState<IDataType[]>([])

    useEffect(() => {
        axios.get("/rights?_embed=children").then(res => {
            // 第一層級的功能，若children為空陣列，將其轉為undefine，這樣table就不會顯示展開的符號
            (res.data as IDataType[]).forEach(item => {
                item.children = item.children?.length === 0 ? undefined : item.children;
            })
            setDataSource(res.data);
        })
    }, [])


    const columns: ColumnsType<IDataType> = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (id) => {
                return <b>{id}</b>
            }
        },
        {
            title: '權限名稱',
            dataIndex: 'title'
        },
        {
            title: '權限路徑',
            dataIndex: 'key',
            render: (key) => {
                return <Tag color="orange">{key}</Tag>
            }
        },
        {
            title: '操作',
            render: (item: IDataType) => {
                return <div>
                    <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => {
                        confirm({
                            title: "你確定要刪除?",
                            icon: <ExclamationCircleOutlined />,
                            // content: 'Some descriptions',
                            onOk() {
                                if (item.grade === 1) {
                                    setDataSource(dataSource.filter(data => data.id !== item.id));
                                    axios.delete(`/rights/${item.id}`);
                                }
                                else if (item.grade === 2) {
                                    let list = dataSource.filter(data => data.id === item.rightId)[0];
                                    // 此處就改變dataSource資料了(位址方式改變資料)，只是因為是非受控所以不會重新渲染
                                    list.children = list.children?.filter(data => data.id !== item.id);
                                    // 取巧方式讓dataSource重新渲染
                                    setDataSource([...dataSource]);
                                    axios.delete(`/children/${item.id}`);
                                }
                            },
                            onCancel() {
                                // console.log('Cancel');
                            },
                        });
                    }}></Button>
                    <Popover content={<div style={{ textAlign: "center" }}>
                        <Switch checked={item.pagepermission === 1} onChange={() => {
                            item.pagepermission = item.pagepermission === 1 ? 0 : 1;
                            setDataSource([...dataSource]);
                            if (item.grade === 1) {                                
                                axios.patch(`/rights/${item.id}`, {
                                    pagepermission: item.pagepermission
                                });
                            }
                            else if (item.grade === 2) {
                                axios.patch(`/children/${item.id}`, {
                                    pagepermission: item.pagepermission
                                });
                            }
                        }} />
                    </div>} title="配置項" trigger={item.pagepermission === undefined ? "" : "click"}>
                        <Button shape="circle" icon={<EditOutlined />} disabled={item.pagepermission === undefined}></Button>
                    </Popover>
                </div>
            }
        }
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
        </div>
    )
}
