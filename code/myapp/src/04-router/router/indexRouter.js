import React, { Component } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Films from '../views/Films'
import Cenimas from '../views/Cenimas'
import Center from '../views/Center'

export default class indexRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path={'/films'} element={<Films />} />
                    <Route path={'/cinemas'} element={<Cenimas />} />
                    <Route path={'/center'} element={<Center />} />
                </Routes>
            </HashRouter>
        )
    }
}
