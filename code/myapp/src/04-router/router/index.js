import { Routes, Route, Navigate } from 'react-router-dom'
import Redirect from '../components/Redirect'

import Film from '../views/Film'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'

import Cenima from '../views/Cenima'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'

export default function MRouter() {
    return (
        <Routes>
            {/* 默認初始化入口 */}
            <Route path="/" element={<Navigate to="/film" />} />
            {/* <Route path="/" element={<Redirect to="/film" />} /> */}
            <Route path="/login" element={<Login />} />

            <Route path="/film" element={<Film />}>                
                <Route index element={<Redirect to="/film/nowplaying" />} />
                <Route path="nowplaying" element={<Nowplaying />} />
                <Route path="comingsoon" element={<Comingsoon />} />
            </Route>
            <Route path="/cinema" element={<Cenima />} />
            <Route path="/center" element={<Center />} />
            {/* 動態路由 */}
            {/* <Route path="/detail" element={<Detail />} /> */}
            <Route path="/detail/:myid" element={<Detail />} />
            {/* 404頁面 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
