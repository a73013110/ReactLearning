
import React, { Component } from 'react'
import { Map, List } from 'immutable'

export default class App extends Component {
    state = {
        info: Map({
            name: "yikai",
            location: Map({
                province: "台灣",
                city: "台南"
            }),
            favor: List(["讀書", "炒股", "寫程式"])
        })
    }

    render() {
        return (
            <div>
                <h1>個人訊息修改</h1>
                <button onClick={() => {
                    this.setState({
                        info: this.state.info.set("name", "vans")
                            .set("location", this.state.info.get("location").set("city", "台北"))
                    })
                }}>修改</button>
                <div>
                    {this.state.info.get("name")}
                    <br />
                    {
                        this.state.info.get("location").get("province")
                    }
                    -
                    {
                        this.state.info.get("location").get("city")
                    }
                    <br />
                    {
                        this.state.info.get("favor").map((item, index) =>
                            <li key={item}>{item}
                                <button onClick={() => {
                                    this.setState({
                                        info: this.state.info.set("favor", this.state.info.get("favor").splice(index, 1))
                                    })
                                }}>del</button>
                            </li>
                        )
                    }
                </div>

            </div>
        )
    }
}
