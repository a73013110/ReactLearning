import React from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import {
    AppOutline,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'

import style from './Tabbar.module.css'

export default function Tabbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const tabs = [
        {
            key: '/film',
            title: '電影',
            icon: <AppOutline />
        },
        {
            key: '/cinema',
            title: '影院',
            icon: <UnorderedListOutline />
        },
        {
            key: '/center',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    return (
        <footer className={style.tabbar}>
            {/* <ul>
                <li>
                    <NavLink to="/film" className={({ isActive }) => isActive ? style.active : ''}>電影</NavLink>
                </li>
                <li>
                    <NavLink to="/cinema" className={({ isActive }) => isActive ? style.active : ''}>影院</NavLink>
                </li>
                <li>
                    <NavLink to="/center" className={({ isActive }) => isActive ? style.active : ''}>我的</NavLink>
                </li>
            </ul> */}
            <TabBar onChange={(value) => {
                console.log(value)
                navigate(value)
            }} activeKey={"/" + location.pathname.split("/")[1]}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </footer>
    )
}
