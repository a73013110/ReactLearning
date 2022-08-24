import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Tabbar.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/films" className={({ isActive }) => isActive ? 'active' : ''}>電影</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cinemas" className={({ isActive }) => isActive ? 'active' : ''}>影院</NavLink>
                    </li>
                    <li>
                        <NavLink to="/center" className={({ isActive }) => isActive ? 'active' : ''}>我的</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
