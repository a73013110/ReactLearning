import { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import Tabbar from './components/Tabbar'
import store from './redux/stroe'
import MRouter from './router'

import './views/css/App.css'

export default function App() {

    const [isShow, setIsShow] = useState(store.getState().TabbarReducer.get("show"))

    useEffect(() => {
        let unsubscribe = store.subscribe(() => {
            console.log("App中訂閱", store.getState())
            setIsShow(store.getState().TabbarReducer.get("show"))
        })
        // 銷毀此組件時必須清除訂閱
        return () => {
            unsubscribe()
        }
    })
    

    return (
        <HashRouter>
            {isShow && <Tabbar></Tabbar>}
            <MRouter></MRouter>
        </HashRouter>
    )
}
