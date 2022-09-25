import React, { useState } from 'react'
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false)
    const navigete = useNavigate();
    const auth = useAuth();

    const changeCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: auth.userInfo.role.roleName,
                },
                {
                    key: '99',
                    danger: true,
                    label: '登出',
                    onClick: () => {
                        localStorage.removeItem("token");
                        navigete("/login");
                    }
                },
            ]}
        />
    );

    return (
        <Header className="site-layout-background" style={{ padding: "0px 16px" }}>
            {
                collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />
            }

            <div style={{ float: "right" }}>
                <span>歡迎<span style={{ color: "#1890ff" }}>{auth.userInfo.username}</span>回來</span>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}
