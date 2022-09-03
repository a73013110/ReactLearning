import { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { autorun } from 'mobx'

import Tabbar from './components/Tabbar'
import MRouter from './router'
import store from './mobx/store'

import './views/css/App.css'

export default function App() {
    const [isShow, setIsShow] = useState(store.isTabbarShow)

    useEffect(() => {
        autorun(() => {
            setIsShow(store.isTabbarShow)
        })
    }, [])

    return (
        <HashRouter>
            {isShow && <Tabbar></Tabbar>}
            <MRouter></MRouter>
        </HashRouter>
    )
}
