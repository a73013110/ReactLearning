import React, { useState } from 'react'
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../interface/user/IUser'

const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false)
    const navigete = useNavigate();

    const changeCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const UserInfo: IUser = JSON.parse(localStorage.getItem("token") || "");

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: UserInfo.role.roleName,
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
                <span>歡迎<span style={{ color: "#1890ff" }}>{UserInfo.username}</span>回來</span>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}
