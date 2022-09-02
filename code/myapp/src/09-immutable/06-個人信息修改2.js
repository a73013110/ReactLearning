
import React, { Component } from 'react'
import { fromJS } from 'immutable'

export default class App extends Component {
    state = {
        info: fromJS({
            name: "yikai",
            location: {
                province: "台灣",
                city: "台南"
            },
            favor: ["讀書", "炒股", "寫程式"]
        })
    }

    componentDidMount() { 
        console.log(this.state.info)
     }

    render() {
        return (
            <div>
                <h1>個人訊息修改</h1>
                <button onClick={() => {
                    this.setState({
                        info: this.state.info
                            // .set("name", "vans")
                            .setIn(["name"], "vans")
                            // .set("location", this.state.info.get("location").set("city", "台北"))
                            .setIn(["location", "city"], "台北")
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
                                        info: this.state.info.updateIn(["favor"], (list) => {   // 更新favor, 第二個參數為更新後的陣列值callback function
                                            return list.splice(index, 1)
                                        })
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
