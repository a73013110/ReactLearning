import React from 'react'
import { Route, Routes, useNavigate, Link, Navigate } from 'react-router-dom'

import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'

import NotFound from './NotFound'

export default function Films() {
    
    const navigate = useNavigate()
    
    return (
        <div>
            <div style={{ height: "200px", background: "yellow" }}>
                大輪播
            </div>

            <div>導航欄</div>

            <button onClick={() => {
                navigate("/films/nowplaying")
            }}>Nowplaying</button>
            <Link to="/films/nowplaying">Nowplaying</Link>

            <button onClick={() => {
                navigate("/films/comingsoon")
            }}>Comingsoon</button>
            <Link to="/films/comingsoon">Comingsoon</Link>

            <Routes>
                <Route path="/" element={<Navigate to="/films/nowplaying" />} />
                <Route path="/nowplaying" element={<Nowplaying />} />
                <Route path="/comingsoon" element={<Comingsoon />} />
                {/* <Route path="*" element={<NotFound />} />   */}
            </Routes>
        </div>
    )
}
