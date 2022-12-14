import React from 'react'
import { useNavigate, Link, Outlet, NavLink } from 'react-router-dom'

import style from './css/Film.module.css'

export default function Films() {
    
    const navigate = useNavigate()
    
    return (
        <div>
            <div style={{ height: "200px", background: "yellow" }}>
                大輪播
            </div>

            <ul>
                <li>
                    <NavLink to="/film/nowplaying" className={({ isActive }) => isActive ? style.active : ''}>正在熱映</NavLink>
                </li>
                <li>
                    <NavLink to="/film/comingsoon" className={({ isActive }) => isActive ? style.active : ''}>即將上映</NavLink>
                </li>
            </ul>

            {/* <button onClick={() => {
                navigate("/film/nowplaying")
            }}>Nowplaying</button>
            <Link to="/film/nowplaying">Nowplaying</Link>

            <button onClick={() => {
                navigate("/film/comingsoon")
            }}>Comingsoon</button>
            <Link to="/film/comingsoon">Comingsoon</Link> */}

            {/* 路由容器 */}
            <Outlet></Outlet>
        </div>
    )
}
