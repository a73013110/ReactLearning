import React, { Component } from 'react'

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

class Child extends Component {

    render() {
        return <div>
            child
        </div>
    }

    componentDidMount() { 
        window.onresize = () => {
            console.log("onresize")
        }

        this.timer = setInterval(() => {
            console.log("1111")
        }, 1000);
     }

    componentWillUnmount() {
        console.log("componentWillUnmount")

        window.onresize = null

        clearInterval(this.timer)
    }
}
