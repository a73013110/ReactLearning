import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myName: "yikai",
        myAge: 20
    }

    // 基本上所有state更新都會觸發此事件(包含第一次創建[componentWillMount])
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDerivedStateFromProps")        
        return {
            myName: nextState.myName.substring(0, 1).toUpperCase() + nextState.myName.substring(1)
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myName: "vans"
                    })
                }}>click</button>
                App - {this.state.myName} - {this.state.myAge}
            </div>
        )
    }
}
