import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Tabbar from './components/Tabbar'
import MRouter from './router'

import './views/css/App.css'

export default function App() {
    const tabbar = useSelector(state => state.tabbar)    

    return (
        <HashRouter>
            {tabbar.show && <Tabbar></Tabbar>}
            <MRouter></MRouter>
        </HashRouter>
    )
}