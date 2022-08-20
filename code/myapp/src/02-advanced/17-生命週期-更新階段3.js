import React, { Component } from 'react'

class Child extends Component {

    state = {
        title: ""
    }

    render() {
        return <div>
            child - {this.state.title}
        </div>
    }

    // 最先獲得父組件傳來的屬性
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", this.props.text, nextProps.text)

        this.setState({
            title: nextProps.text + "yikai"
        })
    }
}

export default class App extends Component {

    state = {
        text: "111111111"
    }

    render() {

        console.log("render")

        return (
            <div>
                {
                    this.state.text
                }
                <button onClick={() => {
                    this.setState({
                        text: "222222222"
                    })
                }}>click</button>
                <Child text={this.state.text} />
            </div>
        )
    }
}
