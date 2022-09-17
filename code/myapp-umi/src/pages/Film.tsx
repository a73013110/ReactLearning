import { Outlet } from 'umi'
import { Navigate, useLocation, useRouteData } from 'umi'

export default function Film() {
    const location = useLocation()
    const route = useRouteData()
    // 如果目前路徑為根路由(index)，將其跳轉至指定頁面 
    if (location.pathname.replaceAll("/", "").toUpperCase() === route.route.path?.replaceAll("/", "").toUpperCase()) {
        return <Navigate to="/film/Nowplaying" />
    }

    return (
        <div>
            <div style={{ height: "200px", background: "yellow" }}>大輪播</div>

            <Outlet />
        </div>
    )
}
