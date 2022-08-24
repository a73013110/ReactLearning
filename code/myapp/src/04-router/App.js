import React, { Component } from 'react'

import MRouter from './router/indexRouter'
import Tabbar from './components/Tabbar'

export default class App extends Component {
    render() {
        return (
            <div>
                <MRouter>
                    <Tabbar></Tabbar>
                </MRouter>

            </div>
        )
    }
}
