import React, { Component } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import Films from '../views/Films'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'

import Cenimas from '../views/Cenimas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'

export default class indexRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    {/* 默認初始化入口 */}
                    <Route path="/" element={<Navigate to="/films" />} />

                    <Route path="/films/*" element={<Films />} />
                    <Route path="/cinemas" element={<Cenimas />} />
                    <Route path="/center" element={<Center />} />      
                    {/* 404頁面 */}
                    <Route path="*" element={<NotFound />} />              
                </Routes>
            </HashRouter>
        )
    }
}
