import { Button, Table, Modal, Tree } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const { confirm } = Modal;

interface IDataType {
    id: number,
    rights: { checked: React.Key[]; halfChecked: React.Key[]; } | React.Key[],
    roleName: string,
    roleType: number
}

export default function RoleList() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataSource, setDataSource] = useState<IDataType[]>([]);
    const [currentId, setCurrentId] = useState(0);
    const [rightList, setRightList] = useState([]);
    const [currentRights, setcurrentRights] = useState<{ checked: React.Key[]; halfChecked: React.Key[]; } | React.Key[]>([]);
    const columns: ColumnsType<IDataType> = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (id) => {
                return <b>{id}</b>
            }
        },
        {
            title: '角色名稱',
            dataIndex: 'roleName'
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
                                setDataSource(dataSource.filter(data => data.id !== item.id));
                                axios.delete(`http://localhost:5000/roles/${item.id}`);
                            },
                            onCancel() {
                                // console.log('Cancel');
                            },
                        });
                    }}></Button>
                    <Button shape="circle" icon={<EditOutlined />} onClick={() => {
                        setIsModalVisible(true);
                        setCurrentId(item.id);
                        setcurrentRights(item.rights);
                    }}></Button>
                </div>
            }
        },
    ];

    useEffect(() => {
        axios.get("http://localhost:5000/roles").then(res => {
            // console.log(res.data)
            setDataSource(res.data);
        })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/rights?_embed=children").then(res => {
            // console.log(res.data)
            setRightList(res.data);
        })
    }, [])

    const handleOk = () => {
        // console.log(currentId)
        // console.log(currentRights)
        setDataSource(dataSource.map(item => {
            if (item.id === currentId) {
                return {
                    ...item, rights: currentRights
                };
            }
            return item;
        }))
        setIsModalVisible(false);
        axios.patch(`http://localhost:5000/roles/${currentId}`, {
            rights: currentRights
        })
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    const onCheck = (checkedKeysValue: { checked: React.Key[]; halfChecked: React.Key[]; } | React.Key[]) => {
        // console.log('onCheck', checkedKeysValue);
        setcurrentRights((checkedKeysValue as { checked: React.Key[]; halfChecked: React.Key[]; }).checked);
    };

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} rowKey={(item) => item.id}></Table>
            <Modal title="權限分配" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Tree
                    checkable
                    checkStrictly={true}
                    onCheck={onCheck}
                    checkedKeys={currentRights}
                    treeData={rightList}
                />
            </Modal>
        </div>
    )
}
