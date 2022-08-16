import React, { Component } from 'react'

import Navbar from './Navbar'

export default class App extends Component {

    obj = {
        title: "屬性簡寫"
        , leftShow: false
    }

    render() {
        return (
            <div>
                <div>
                    <h2>首頁</h2>
                    <Navbar title="首頁" leftShow={false} />
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title="列表" />
                </div>
                <div>
                    <h2>購物車</h2>
                    <Navbar title="購物車" />
                </div>
                
                <Navbar {...this.obj} />
            </div>
        )
    }
}
