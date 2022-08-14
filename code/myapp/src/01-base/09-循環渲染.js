import React, { Component } from 'react'

export default class App extends Component {

    state = {
        // list: ["1111", "2222", "3333"]
        list: [{
            id: 1
            , text: "1111"
        },{
            id: 2
            , text: "2222"
        },{
            id: 3
            , text: "3333"
        }]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(x => <li key={x.id}>{x.text}</li>)
                    }
                </ul>
            </div>
        )
    }

}
