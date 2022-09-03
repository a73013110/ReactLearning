import React, { Component } from 'react'
import { observable, autorun } from 'mobx'

var observableNumber = observable.box(10)
var observableName = observable.box("yikai")

// 只會監聽autorun內使用到的observable變數
autorun(() => {
    console.log("observableNumber", observableNumber.get())
})

autorun(() => {
    console.log("observableName", observableName.get())
})

setTimeout(() => {
    observableNumber.set(20)
}, 100);

setTimeout(() => {
    observableName.set("vans")
}, 200);

// 物件map
// var myObj = observable.map({
//     name: "yikai",
//     age: 100
// })

// autorun(() => {
//     console.log("物件name屬性改變", myObj.get("name"))
// })

// setTimeout(() => {
//     // myObj.set("age", 18)
//     myObj.set("name", "vans")
// }, 300);

// 物件可省略map
var myObj = observable({
    name: "yikai",
    age: 100
})

autorun(() => {
    console.log("物件name屬性改變", myObj.name)
})

setTimeout(() => {
    // myObj.set("age", 18)
    myObj.name = "vans"
}, 300);


export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}
