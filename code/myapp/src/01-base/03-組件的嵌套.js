/**
 * 透過指令：rcc快速產生class組件，(需安裝ES7+ React/Redux/React-Native snippets)
 * 
 */

import React, { Component } from 'react'

class Child extends Component {
    render() {
        return <div>child</div>
    }
}

class Navbar extends Component {
    render() {
        return <div>navbar
            <Child></Child>
        </div>
    }
}

function Swiper() {
    return <div>swipper</div>
}

const Tabbar = () => <div>tabbar</div>

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
