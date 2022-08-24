import React, { Component } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import Films from '../views/Films'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'

import Cenimas from '../views/Cenimas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'

function isAuth() {
    return localStorage.getItem("token")
}

export default class indexRouter extends Component {
    render() {
        return (
            <HashRouter>
                {this.props.children}
                <Routes>
                    {/* 默認初始化入口 */}
                    <Route path="/" element={<Navigate to="/films" />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="/films/*" element={<Films />} />
                    <Route path="/cinemas" element={<Cenimas />} />

                    <Route path="/center" element={isAuth() ? <Center /> : <Login />} />
                    {/* 動態路由 */}
                    {/* <Route path="/detail" element={<Detail />} /> */}
                    <Route path="/detail/:myid" element={<Detail />} />
                    {/* 404頁面 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </HashRouter>
        )
    }
}
