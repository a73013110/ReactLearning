import React, { Component } from 'react'
import { text } from 'stream/consumers'

interface IState {
    text: string,
    list: Array<string>
}

export default class App extends Component<any, IState> {
    state: Readonly<IState> = {
        text: "",
        list: []
    }

    myRef = React.createRef<HTMLInputElement>()

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={(evt) => {
                    this.setState({
                        text: evt.target.value
                    })
                }} />
                <br />
                <input type="text" ref={this.myRef} />
                <button onClick={() => {
                    console.log(this.state.text)
                    // console.log(this.myRef.current?.value)
                    this.setState({
                        text: "",
                        list: [...this.state.list, this.state.text],
                    })
                }}>click</button>
                <br />
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
