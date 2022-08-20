import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {

    state = {
        list: ["111", "222", "333", "444", "555", "666", "777", "888", "999", "000", "121", "123", "124", "125"]
    }

    componentDidMount() {
        new BetterScroll("#wrapper")
    }

    render() {
        return (
            <div id="wrapper" style={{height: "200px", background: "yellow", overflow: "hidden"}}>
                <ul>
                    {
                        this.state.list.map(item => <li key={item}>
                            {item}
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}
