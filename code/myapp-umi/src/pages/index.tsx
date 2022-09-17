import React from 'react'
import { Outlet, Navigate } from 'umi'

export default function index() {
    return (
        <Navigate to="/film" />
    )
}
