import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myText: "1111"
    }

    // componentWillUpdate() {
    //     console.log("componentWillUpdate")
    // }

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myText: "2222"
                    })
                }}>
                    click
                </button>
                {this.state.myText}
            </div>
        )
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate")
        return 100;
    }

    componentDidUpdate(prevProps, prevState, value) { 
        console.log("componentDidUpdate", prevProps, prevState, value)
    } 
}
