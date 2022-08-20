import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myName: "yikai"
    }

    render() {

        console.log("render")

        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myName: "Yikai"
                    })
                }}>click</button>

                {this.state.myName}
            </div>
        )
    }

    shouldComponentUpdate(newProps, newState) {
        if (JSON.stringify(this.state) !== JSON.stringify(newState)) {
            return true;
        }
        return false;
    }

    UNSAFE_componentWillUpdate() {
        console.log("UNSAFE_componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
}
