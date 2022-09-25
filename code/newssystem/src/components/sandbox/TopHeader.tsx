import React, { useState } from 'react'
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false)
    const navigete = useNavigate();

    const changeCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: "系統管理員",
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
                <span>歡迎admin回來</span>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}
