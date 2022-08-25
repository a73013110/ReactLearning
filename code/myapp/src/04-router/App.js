import { HashRouter } from 'react-router-dom'
import Tabbar from './components/Tabbar'
import MRouter from './router'

export default function App() {
    return (
        <HashRouter>
            <MRouter></MRouter>
            <Tabbar></Tabbar>
        </HashRouter>
    )
}
