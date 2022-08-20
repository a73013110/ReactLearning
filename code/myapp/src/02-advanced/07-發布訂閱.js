import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

var bus = {
    list: [],
    // 訂閱
    subscribe(callback) {
        this.list.push(callback)
    },
    // 發布
    publish(para) {
        this.list.forEach(callback => {
            callback && callback(para)
        })
    }
}

bus.subscribe((para) => {
    console.log(111, para)
})

bus.subscribe((para) => {
    console.log(222, para)
})

setTimeout(() => {
    bus.publish("參數傳遞")
}, 100);