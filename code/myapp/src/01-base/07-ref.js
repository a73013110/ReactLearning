import React, { Component } from 'react'

export default class App extends Component {

myRef = React.createRef()

    render() {
        return (
            <div>
                <input ref={this.myRef} />

                <button onClick={() => {
                    console.log("Click1", this.myRef.current.value);
                }}>add1</button>
            </div>
        )
    }

}
