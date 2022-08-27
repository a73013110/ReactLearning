import React from 'react'
import { useRoutes } from 'react-router-dom'
import Redirect from '../components/Redirect'

export default function MRouter() {
    const element = useRoutes([
        {
            path: "/",
            element: <Redirect to="/film" />
        },
        {
            path: "/login",
            element: LazyLoad("Login")
        },
        {
            path: "/film",
            element: LazyLoad("Film"),
            children: [
                {
                    path: "",
                    element: <Redirect to="/film/nowplaying" />
                },
                {
                    path: "nowplaying",
                    element: LazyLoad("films/Nowplaying")
                },
                {
                    path: "comingsoon",
                    element: LazyLoad("films/Comingsoon")
                }
            ]
        },
        {
            path: "/cinema",
            element: LazyLoad("Cenima")
        },
        {
            path: "/city",
            element: LazyLoad("City")
        },
        {
            path: "/center",
            element: <AuthComponent>{LazyLoad("Center")}</AuthComponent>
        },
        {
            path: "/detail/:myid",
            element: LazyLoad("Detail")
        },
        {
            path: "*",
            element: LazyLoad("NotFound")
        },
    ])

    return (
        element
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