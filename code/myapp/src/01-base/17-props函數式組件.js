import React, { Component } from 'react'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 類組件 */}
                <Navbar></Navbar>
                {/* 函數組件 */}
                <Sidebar bg="yellow" position="left"></Sidebar>
            </div>
        )
    }
}
