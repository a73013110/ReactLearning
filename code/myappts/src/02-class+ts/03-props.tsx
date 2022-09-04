import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <Child name="yikai"></Child>
            </div>
        )
    }
}

interface IProps {
    name: string
}

class Child extends Component<IProps, any> {
    render() {
        return <div>
            Child - {this.props.name}
        </div>
    }
}