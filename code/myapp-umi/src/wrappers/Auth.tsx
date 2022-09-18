import React from 'react'
import { Navigate, Outlet } from 'umi'

export default function Auth(porps: any) {
    if (localStorage.getItem("token")) {
        return (
            <Outlet />
        )
    }
    return <Navigate to="/Login" />
}
