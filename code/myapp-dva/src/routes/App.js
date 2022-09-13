import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'

export default class App extends Component {
    render() {
        return (
            <div>App
                {this.props.children}
                <Tabbar />
            </div>
        )
    }
}
