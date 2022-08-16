import React, { Component } from 'react'

export default class App extends Component {

    myUserName = React.createRef();

    render() {
        return (
            <div>
                <h1>登錄頁</h1>
                {/* 非受控組件：直接操作DOM，後續將不被React關注、處理 */}
                <input type="text" ref={this.myUserName} defaultValue="Yikai" />

                <button onClick={() => {
                    console.log(this.myUserName.current.value)
                }}>登錄</button>

                <button onClick={() => {
                    this.myUserName.current.value = ""
                }}>重置</button>
                
                {/* 未來既使userName改變，Child仍然不會改變，除非透過setStatus觸發重新Render => 直接透過Status管理比較OK */}
                {/* <Child myvalue={this.myUserName.current.value}></Child> */}
            </div>
        )
    }
}
