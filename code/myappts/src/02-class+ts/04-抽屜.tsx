import React, { Component } from 'react'

export default class App extends Component {
    state = {
        isShow: true
    }
    render() {
        return (
            <div>
                app
                <Navbar title="首頁" isShow={this.state.isShow} toggleSidebar={(value: boolean) => {
                    this.setState({
                        isShow: value
                    })
                }}></Navbar>
                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        )
    }
}

interface IProps {
    title: string,
    isShow: boolean,
    toggleSidebar: (value: boolean) => void
}

class Navbar extends Component<IProps, any> {
    render() {
        return <div>
            Navbar - {this.props.title}
            <button onClick={() => {
                this.props.toggleSidebar(!this.props.isShow)
            }}>click</button>
        </div>
    }
}

class Sidebar extends Component {
    render() {
        return <div>
            Sidebar
        </div>
    }
}