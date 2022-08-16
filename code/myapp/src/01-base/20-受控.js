import React, { Component } from 'react'

export default class App extends Component {

    state = {
        userName: "Yikai"
    }
   
    render() {
        return (
            <div>
                <h1>登錄頁</h1>
                {/* 受控組件：透過事件監聽資料異動，再回來調整State，使組件重新render */}
                <input type="text" value={this.state.userName} onChange={(evt) => {
                    this.setState({
                        userName: evt.target.value
                    })
                }} />

                <button onClick={() => {
                    console.log(this.state.userName)
                }}>登錄</button>

                <button onClick={() => {
                    this.setState({
                        userName: ""
                    })
                }}>重置</button>

                {/* 未來傳遞給Chuld就變得很簡單 */}
                {/* <Child myvalue={this.state.userName}></Child> */}
            </div>
        )
    }
}
