import React from 'react'
import { Route, Routes, useNavigate, Link, Navigate, Outlet } from 'react-router-dom'

export default function Films() {
    
    const navigate = useNavigate()
    
    return (
        <div>
            <div style={{ height: "200px", background: "yellow" }}>
                大輪播
            </div>

            <div>導航欄</div>

            <button onClick={() => {
                navigate("/film/nowplaying")
            }}>Nowplaying</button>
            <Link to="/film/nowplaying">Nowplaying</Link>

            <button onClick={() => {
                navigate("/film/comingsoon")
            }}>Comingsoon</button>
            <Link to="/film/comingsoon">Comingsoon</Link>

            {/* 路由容器 */}
            <Outlet></Outlet>
        </div>
    )
}
