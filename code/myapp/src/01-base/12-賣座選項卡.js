import React, { Component } from 'react'
import './css/02-賣座.css'

import Film from './賣座Component/Film'
import Cinema from './賣座Component/Cinema'
import Center from './賣座Component/Center'

export default class App extends Component {

    state = {
        list: [
            {
                id: 1
                , text: "電影"
            }
            , {
                id: 2
                , text: "影院"
            }
            , {
                id: 3
                , text: "我的"
            }
        ]
        , current: 0
    }

    showPage() {
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                {
                    this.showPage()
                }

                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}
                                className={this.state.current === index ? "active" : ""}
                                onClick={() => this.handleClick(index)}
                            >{item.text}</li>)
                    }
                </ul>
            </div>
        )
    }

    handleClick(index) {
        this.setState({
            current: index
        })
    }
}
