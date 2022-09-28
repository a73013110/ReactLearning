import { Button, Table, Modal, Switch, Form } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import UserForm from '../../../components/user-manage/UserForm';
import { IUser } from '../../../interface/user/IUser';
import { IRole } from '../../../interface/role/IRole';
import { ERole } from '../../../enum/role/ERole';
import { IRegion } from '../../../interface/region/IRegion';
import useAuth from '../../../components/hook/useAuth';

const { confirm } = Modal;


export default function UserList() {
    const [dataSource, setDataSource] = useState<IUser[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isAddModal, setIsAddModal] = useState(true); // 指出Model是否為新增模式
    const [roleList, setRoleList] = useState<IRole[]>([]);
    const [isFormRegionDisable, setisFormRegionDisable] = useState(false)
    const [regionList, setRegionList] = useState<IRegion[]>([])
    const [form] = Form.useForm();
    const { userInfo } = useAuth();

    useEffect(() => {
        axios.get("/users?_expand=role").then(res => {
            // console.log(res);
            const list = res.data as IUser[];
            setDataSource(
                // 若是超級管理員，給予全部權限
                userInfo.roleId === ERole.SuperAdmin ? list : [
                    // 自己的權限
                    ...list.filter(x => x.username === userInfo.username),
                    // 因為區域編輯沒有此功能，因此加入此資料不會造成資料重複問題
                    ...list.filter(x => x.region === userInfo.region && x.roleId === ERole.Editor)
                ]);
        })
    }, [userInfo])

    useEffect(() => {
        axios.get("/regions").then(res => {
            // console.log(res);
            setRegionList(res.data);
        })
    }, [])

    useEffect(() => {
        axios.get("/roles").then(res => {
            // console.log(res);
            setRoleList(res.data);
        })
    }, [])

    const columns: ColumnsType<IUser> = [
        {
            title: '區域',
            dataIndex: 'region',
            filters: [
                { text: "全球", value: "" },
                ...regionList.map(item => ({
                    text: item.title,
                    value: item.value
                }))
            ],
            onFilter: (value, item) => item.region === value,
            render: (region) => {
                return <b>{region === "" ? "全球" : region}</b>
            }
        },
        {
            title: '角色名稱',
            dataIndex: 'role',
            render: (role: IUser["role"]) => {
                return role.roleName
            }
        },
        {
            title: '用戶名',
            dataIndex: 'username'
        },
        {
            title: '用戶狀態',
            dataIndex: 'roleState',
            render: (roleState, item) => {
                return <Switch checked={roleState} disabled={item.default} onChange={() => UpdateRoleState(item)}></Switch>
            }
        },
        {
            title: '操作',
            render: (item: IUser) => {
                return <div>
                    <Button danger shape="circle" icon={<DeleteOutlined />} disabled={item.default} onClick={() => Del(item)}></Button>
                    <Button shape="circle" icon={<EditOutlined />} disabled={item.default} onClick={() => Edit(item)}></Button>
                </div >
            }
        }
    ];

    const Add = () => {
        form.validateFields().then((values: IUser) => {
            setIsModalVisible(false);
            axios.post("/users", {
                ...values,
                "roleState": true,
                "default": false,
            }).then(res => {
                console.log(res.data);
                setDataSource([{
                    ...res.data,
                    role: roleList.filter(item => item.id === values.roleId)[0]
                }, ...dataSource])
            })
        }).catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    const UpdateRoleState = (item: IUser) => {
        item.roleState = !item.roleState;
        setDataSource([...dataSource]);
        axios.patch(`/users/${item.id}`, {
            roleState: item.roleState
        })
    }

    const Edit = (item: IUser) => {
        form.resetFields();
        setIsAddModal(false);
        setIsModalVisible(true);
        setisFormRegionDisable(item.roleId === 1)   // 若為超級管理員，禁用區域選單
        form.setFieldsValue(item);
    }

    const Update = () => {
        form.validateFields().then((values: IUser) => {
            setIsModalVisible(false);
            setDataSource(dataSource.map(data => {
                if (data.id === values.id) {
                    return {
                        ...data,
                        ...values,
                        role: roleList.filter(item => item.id === values.roleId)[0]
                    }
                }
                return data;
            }))
            axios.patch(`/users/${values.id}`, values)
        }).catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    const Del = (item: IUser) => {
        confirm({
            title: "你確定要刪除?",
            icon: <ExclamationCircleOutlined />,
            onOk() {
                setDataSource(dataSource.filter(data => data.id !== item.id));
                axios.delete(`/users/${item.id}`);
            }
        });
    }

    return (
        <div>
            <Button type="primary" onClick={() => {
                form.resetFields();
                setIsAddModal(true);
                setIsModalVisible(true);
                setisFormRegionDisable(false);
            }} >新增用戶</Button>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{ pageSize: 5 }}
                rowKey={item => item.id}
            />

            <Modal
                open={isModalVisible}
                title={(isAddModal ? "新增" : "更新") + "用戶"}
                okText={(isAddModal ? "確定" : "更新")}
                cancelText="取消"
                onCancel={() => setIsModalVisible(false)}
                onOk={() => isAddModal ? Add() : Update()}
            >
                <UserForm form={form} regionList={regionList} roleList={roleList}
                    isFormRegionDisable={isFormRegionDisable} isAddModal={isAddModal}
                    // 讓子組件能夠改變父組件的狀態，避免子組件中狀態改變但父組件未變，下次父組件再呼叫子組件時，子組件的狀態不如預期
                    setFormRegionDisable={(isRegionDisable) => setisFormRegionDisable(isRegionDisable)}
                ></UserForm>
            </Modal>
        </div >
    )
}
