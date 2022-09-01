import React from 'react'

import { Map } from 'immutable'

export default class App extends React.Component {
    state = {
        info: Map({
            name: "yikai",
            select: "aa",
            filter: Map({
                text: "",
                up: true,
                down: false
            })
        })
    }

    componentDidMount() {
        console.log("App", this.state.info)
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        info: this.state.info.set("name", "vans")
                    })
                }}>click</button>
                {this.state.info.get("name")}
                <Child filter={this.state.info.get("filter")} />
            </div>
        )
    }
}

class Child extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.filter === nextProps.filter) {
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState) { 
        console.log("Child componentDidUpdate", this.props)
    }

    render() {
        return (
            <div>
                {this.props.filter.get("text")} - {this.props.filter.get("up").toString()}  - {this.props.filter.get("down").toString()}
            </div>
        )
    }
}
