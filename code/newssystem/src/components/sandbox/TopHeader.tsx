import React, { useState } from 'react'
import { Avatar, Dropdown, Layout, Menu, Space } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';

const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false)

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
