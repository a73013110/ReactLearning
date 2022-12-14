import { HashRouter } from 'react-router-dom'
import Tabbar from './components/Tabbar'
import MRouter from './router'

import './views/css/App.css'

export default function App() {
    return (
        <HashRouter>
            <Tabbar></Tabbar>
            <MRouter></MRouter>
        </HashRouter>
    )
}
