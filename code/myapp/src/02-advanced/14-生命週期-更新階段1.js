import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class App extends Component {

    state = {
        myName: "yikai",
        list: []
    }

    componentDidMount() {
        axios.get("/test.json").then(res => {
            console.log(res.data.data.films)

            this.setState({
                list: res.data.data.films
            }, () => {
                // new BetterScroll("#wrapper")
            })

        })
    }

    render() {
        console.log("Render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myName: "Yikai"
                    })
                }}>click</button>
                <span id="myName">{this.state.myName}</span>

                <div id="wrapper" style={{height: "200px", background: "yellow", overflow: "hidden"}}>
                    <ul>
                        {
                            this.state.list.map(item => <li key={item.filmId}>
                                {item.name}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }

    UNSAFE_componentWillUpdate() {
        console.log("Will update")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Did updated")

        if (prevState.list.length === 0) {
            new BetterScroll("#wrapper")
        }
    }
}
