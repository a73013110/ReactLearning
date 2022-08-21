import React, { Component, useEffect } from 'react'

export default class App extends Component {

    state = {
        isCreate: true
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isCreate: !this.state.isCreate
                    })
                }}>click</button>
                {/* {this.state.isCreate ? <Child /> : ""} */}
                {this.state.isCreate && <Child />}
            </div>
        )
    }
}

function Child() {
    useEffect(() => {
        window.onresize = () => {
            console.log("onresize")
        }

        var timer = setInterval(() => {
            console.log("1111")
        }, 1000);

        return () => {
            console.log("組件銷毀")
            window.onresize = null    
            clearInterval(timer)
        }
    }, [])

    return <div>
        child
    </div>
}