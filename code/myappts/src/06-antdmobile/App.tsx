import React from 'react'
import { useSelector } from 'react-redux'
import IndexRouter from './router'

import { IStoreState } from './redux/store'

export default function App() {
    const tabbar = useSelector((state: IStoreState) => state.tabbar)
    
    return (
        <div>
            <IndexRouter></IndexRouter>

            {
                tabbar.isTabbarShow &&
                <ul>
                    <li>電影</li>
                    <li>影院</li>
                    <li>我的</li>
                </ul>
            }
        </div>
    )
}
