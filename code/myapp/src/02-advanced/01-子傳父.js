import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        return (
            <div style={{ background: "red" }}>
                <button onClick={() => {
                    this.props.event();
                }}>click</button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{ background: "yellow", width: "200px" }}>
                <ul>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {

    state = {
        isShow: false
    }

    handleEvent = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div>
                <Navbar event={this.handleEvent} />

                {this.state.isShow && <Sidebar />}
            </div>
        )
    }
}
