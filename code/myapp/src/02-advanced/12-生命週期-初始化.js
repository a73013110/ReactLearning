import React, { Component } from 'react'

export default class App extends Component {

    state = {
        name: "yikai"
    }

    /**
     * 初始化
     */
    componentWillMount() {
        console.log("componentWillMount")

        this.setState({
            name: "Yikai"
        })
    }

    /**
     * render完成後
     */
    componentDidMount() {
        console.log("componentDidMount")
        // Ajax請求
        // 訂閱函數
        // setInterval
        // 對於DOM操作
    }

    /**
     * 
     * @returns 
     */
    render() {
        console.log("render")
        return (
            <div>{this.state.name}</div>
        )
    }
}
