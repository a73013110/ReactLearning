import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import Film from '../views/Film'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import Detail from '../views/Detail'

export default function IndexRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/film" />} />
                <Route path="/film" element={<Film />} />
                <Route path="/cinema" element={<Cinema />} />
                <Route path="/center" element={<Center />} />

                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </HashRouter>
    )
}
