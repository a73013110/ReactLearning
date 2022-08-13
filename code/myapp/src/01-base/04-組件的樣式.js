import React, { Component } from 'react'
import './css/01-index.css' // 導入css，透過webpack

export default class App extends Component {
    render() {
        var text = 'Hello Text'
        var style = {
            backgroundColor: "red"
            , fontSize: "20px"
        }
        return (
            <div>
                {(20 > 10) ? "Large" : "Less"}
                <div style={style}>{text}</div>
                <div style={{ background: "yellow" }}>{text}</div>
                <div className='active'>{text}</div>
                <div id='myapp'>{text}</div>
                <label htmlFor="username">使用者</label>
                <input type="text" id="username"/>
            </div>
        )
    }
}
