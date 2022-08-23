import React, { Component } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import Films from '../views/Films'
import Cenimas from '../views/Cenimas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'

export default class indexRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path={'/films'} element={<Films />} />
                    <Route path={'/cinemas'} element={<Cenimas />} />
                    <Route path={'/center'} element={<Center />} />
                    
                    <Route path={'/'} element={<Navigate to="/films" replace />} />
                    {/* <Route element={<NotFound />} /> */}
                </Routes>
            </HashRouter>
        )
    }
}
