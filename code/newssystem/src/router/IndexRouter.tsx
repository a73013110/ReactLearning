import React from 'react'
import { HashRouter } from 'react-router-dom'
import MainRouter from './MainRouter'

export default function IndexRouter() {
    return (
        <HashRouter>
            <MainRouter></MainRouter>
        </HashRouter>
    )
}
