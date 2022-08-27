import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Tabbar.module.css'

export default function Tabbar() {
    return (
        <footer>
            <ul>
                <li>
                    <NavLink to="/film" className={({ isActive }) => isActive ? style.active : ''}>電影</NavLink>
                </li>
                <li>
                    <NavLink to="/cinema" className={({ isActive }) => isActive ? style.active : ''}>影院</NavLink>
                </li>
                <li>
                    <NavLink to="/center" className={({ isActive }) => isActive ? style.active : ''}>我的</NavLink>
                </li>
            </ul>
        </footer>
    )
}
