import { useRoutes, Navigate } from 'react-router-dom'
import Login from '../pages/login/Login';
import Home from '../pages/sandbox/home/Home';
import NewsSandBox from '../pages/sandbox/NewsSandBox';
import NoPermission from '../pages/sandbox/nopermission/NoPermission';
import RightList from '../pages/sandbox/right-manage/RightList';
import RoleList from '../pages/sandbox/right-manage/RoleList';
import UserList from '../pages/sandbox/user-manage/UserList';

export default function MainRouter() {
    const route = useRoutes([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/",
            element: <NewsSandBox />,
            children: [
                {
                    path: "",
                    element: <Navigate to="/home" />
                },
                {
                    path: "/home",
                    element: <Home />
                },
                {
                    path: "/user-manage/list",
                    element: <UserList />
                },
                {
                    path: "/right-manage/role/list",
                    element: <RoleList />
                },
                {
                    path: "/right-manage/right/list",
                    element: <RightList />
                },
                {
                    path: "*",
                    element: <NoPermission />
                }
            ]
        }
    ])

    return route;
}