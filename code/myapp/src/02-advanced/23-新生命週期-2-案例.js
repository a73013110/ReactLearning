import React, { Component } from 'react'
import './css/04-clear.css'

export default class App extends Component {

    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    // componentWillUpdate() {
    //     console.log("componentWillUpdate")
    // }

    myRef = React.createRef()

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        list: [...[11, 12, 13, 14, 15, 16, 17, 18, 19, 20], ...this.state.list]
                    })
                }}>
                    來郵件
                </button>

                <h1>郵箱應用</h1>

                <div style={{ height: "200px", overflow: "auto" }} ref={this.myRef}>
                    <ul>
                        {
                            this.state.list.map(item => <li key={item} style={{ height: "100px", background: "yellow" }}>{item}</li>)
                        }
                    </ul>
                </div>


            </div>
        )
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate", this.myRef.current)        
        return this.myRef.current.scrollHeight;
    }

    componentDidUpdate(prevProps, prevState, value) {
        console.log("componentDidUpdate", prevProps, prevState)
        console.log("componentDidUpdate", value, this.myRef.current.scrollHeight)
        this.myRef.current.scrollTop = this.myRef.current.scrollHeight - value
    }
}


