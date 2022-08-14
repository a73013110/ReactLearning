import React, { Component } from 'react'

export default class App extends Component {

    // 設置狀態方法1：
    // state = {
    //     mytext: "收藏"
    //     , myShow: true
    //     , myName: "Vans"
    // }

    // 設置狀態方法2：
    constructor() {
        super();    // [重要]繼承Component的status
        this.state = {
            mytext: "收藏"
            , myShow: true
            , myName: "Vans"
        }
    }

    render() {
        return (
            <div>
                <h1>歡迎來到React開發 - {this.state.myName}</h1>

                <button onClick={() => {
                    this.setState({
                        myShow: !this.state.myShow
                        , myName: "Hello Vans"
                    })

                    if (this.state.myShow) {
                        console.log("收藏邏輯");
                    }
                    else {
                        console.log("取消收藏邏輯");
                    }
                }}>{this.state.myShow ? "收藏" : "取消收藏"}</button>
            </div>
        )
    }
}
