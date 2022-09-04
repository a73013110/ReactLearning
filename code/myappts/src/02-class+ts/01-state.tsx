import React, { Component } from 'react'

interface IState {
    name: string
}

// Component<屬性Interface, 狀態Interface>
export default class App extends Component<any, IState> {
    state = {
        name: "yikai"
    }

    render() {
        return (
            <div>
                App - {this.state.name.substring(0, 1).toUpperCase() + this.state.name.substring(1)}
                <button onClick={() => {
                    this.setState({
                        name: "vans"
                    })
                }}>
                    click
                </button>
            </div>
        )
    }
}
