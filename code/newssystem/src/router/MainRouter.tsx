import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRoutes, Navigate, RouteObject } from 'react-router-dom'
import useAuth from '../components/hook/useAuth';
import { IMenuItem } from '../interface/menu/IMenuItem';
import Login from '../pages/login/Login';
import Audit from '../pages/sandbox/audit-manage/Audit';
import AuditList from '../pages/sandbox/audit-manage/AuditList';
import Home from '../pages/sandbox/home/Home';
import NewsAdd from '../pages/sandbox/news-manage/NewsAdd';
import NewsCategory from '../pages/sandbox/news-manage/NewsCategory';
import NewsDraft from '../pages/sandbox/news-manage/NewsDraft';
import NewsSandBox from '../pages/sandbox/NewsSandBox';
import NoPermission from '../pages/sandbox/nopermission/NoPermission';
import Published from '../pages/sandbox/publish-manage/Published';
import Sunset from '../pages/sandbox/publish-manage/Sunset';
import Unpublished from '../pages/sandbox/publish-manage/Unpublished';
import RightList from '../pages/sandbox/right-manage/RightList';
import RoleList from '../pages/sandbox/right-manage/RoleList';
import UserList from '../pages/sandbox/user-manage/UserList';

interface ILocalRouterMap { [key: string]: React.ReactNode }

const LocalRouterMap: ILocalRouterMap = {
    "/home": <Home />,
    "/user-manage/list": <UserList />,
    "/right-manage/role/list": <RoleList />,
    "/right-manage/right/list": <RightList />,
    "/news-manage/add": <NewsAdd />,
    "/news-manage/draft": <NewsDraft />,
    "/news-manage/category": <NewsCategory />,
    "/audit-manage/audit": <Audit />,
    "/audit-manage/list": <AuditList />,
    "/publish-manage/unpublished": <Unpublished />,
    "/publish-manage/published": <Published />,
    "/publish-manage/sunset": <Sunset />,
}

export default function MainRouter() {
    const [BackRouteList, setBackRouteList] = useState<RouteObject[]>([])
    const { userInfo, isLogin } = useAuth();

    // 檢查該功能是否有key值或啟用狀態
    const checkRoute = (item: IMenuItem) => {
        return LocalRouterMap[item.key] && item.pagepermission
    }

    // 檢查使用者是否有該功能權限
    const checkUserPermission = (item: IMenuItem) => {
        return isLogin && userInfo.role.rights.includes(item.key);
    }

    useEffect(() => {
        Promise.all([
            axios.get("http://localhost:5000/rights"),
            axios.get("http://localhost:5000/children")
        ]).then(res => {
            // console.log(res);
            let routeList: IMenuItem[] = [...res[0].data, ...res[1].data]
            setBackRouteList([
                {
                    path: "",
                    element: <Navigate to="/home" />
                },
                {
                    path: "*",
                    element: <NoPermission />
                },
                ...routeList.map(item => {
                    return checkRoute(item) && checkUserPermission(item) ? {
                        path: item.key,
                        element: LocalRouterMap[item.key]
                    } : {}
                })
            ])
        })
    }, [])


    const route = useRoutes([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/",
            element: <NewsSandBox />,
            children: BackRouteList
        }
    ])

    return route;
}