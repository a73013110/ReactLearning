import { Routes, Route, Navigate } from 'react-router-dom'
import Redirect from '../components/Redirect'

// import Film from '../views/Film'
// import Nowplaying from '../views/films/Nowplaying'
// import Comingsoon from '../views/films/Comingsoon'

// import Cinema from '../views/Cinema'
// import Center from '../views/Center'
// import NotFound from '../views/NotFound'
// import Detail from '../views/Detail'
// import Login from '../views/Login'
import React from 'react'

export default function MRouter() {
    return (
        <Routes>
            {/* 默認初始化入口 */}
            <Route path="/" element={LazyLoad("Film")} />
            {/* <Route path="/" element={<Redirect to="/film" />} /> */}
            <Route path="/login" element={LazyLoad("Login")} />

            <Route path="/film" element={LazyLoad("Film")}>
                <Route index element={<Redirect to="/film/nowplaying" />} />
                <Route path="nowplaying" element={LazyLoad("films/Nowplaying")} />
                <Route path="comingsoon" element={LazyLoad("films/Comingsoon")} />
            </Route>
            <Route path="/cinema" element={LazyLoad("Cinema")} />
            <Route path="/center" element={<AuthComponent>
                {LazyLoad("Center")}
            </AuthComponent>} />
            {/* 動態路由 */}
            {/* <Route path="/detail" element={<Detail />} /> */}
            <Route path="/detail/:myid" element={LazyLoad("Detail")} />
            {/* 404頁面 */}
            <Route path="*" element={LazyLoad("NotFound")} />
        </Routes>
    )
}

// Router攔截
function AuthComponent({ children }) {
    const isLogin = localStorage.getItem("token")
    return isLogin ? children : <Redirect to="/login" />
}

// Router lazy load
const LazyLoad = (path) => {
    const Comp = React.lazy(() => import(`../views/${path}`))
    return (
        <React.Suspense fallback={<>加載中...</>}>
            <Comp />
        </React.Suspense>
    )
}