import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {

    state = {
        list: []
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.getData()
                }}>click</button>
                <div className="YikaiWrapper" style={{height: "200px", overflow: "hidden"}}>
                    <ul className="YikaiContent">
                        {
                            this.state.list.map(item => 
                                <li key={item}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }

    getData() {
        var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

        this.setState({
            list: list
        }, () => {
            new BetterScroll(".YikaiWrapper")
        })

        // 教學中此段語法OK，但事實上setTimeout內的setState動作似乎是異步
        // setTimeout(() => {

        //     this.setState({
        //         list: list
        //     })
            
        //     console.log(this.state.list)
        //     console.log(document.querySelectorAll("li"))
        //     new BetterScroll(".YikaiWrapper")
            
        // }, 0);
    }
}
