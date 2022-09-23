import {
    UserOutlined
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.css'

const { Sider } = Layout;

const menuList = [
    {
        key: '/home',
        icon: <UserOutlined />,
        label: '首頁',
    },
    {
        key: '/user-manage',
        icon: <UserOutlined />,
        label: "用戶管理",
        children: [{
            key: "/user-manage/list",
            icon: <UserOutlined />,
            label: "用戶列表",
        }]
    },
    {
        key: '/right-manage',
        icon: <UserOutlined />,
        label: "權限管理",
        children: [{
            key: "/right-manage/role/list",
            icon: <UserOutlined />,
            label: "角色列表",
        },
        {
            key: "/right-manage/right/list",
            icon: <UserOutlined />,
            label: "權限列表",
        }]
    }
]

export default function SideMenu() {
    const navigate = useNavigate();

    const onClick: MenuProps["onClick"] = (e) => {
        // console.log("click", e.key);
        navigate(e.key);
    }

    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <div className="logo">全球新聞發布管理系統</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={menuList}
                onClick={onClick}
            />
        </Sider>
    )
}
