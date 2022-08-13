import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <input />
                
                <button onClick={() => {
                    console.log("Click1");
                }}>add1</button>

                <button onClick={this.handleClick2}>add2</button>

                <button onClick={this.handleClick3}>add3</button>

                <button onClick={() => {
                    this.handleClick4();
                }}>add4</button>
            </div>
        )
    }

    handleClick2() {
        console.log("Click2");
    }

    handleClick3 = () => console.log("Click3");
    
    handleClick4() {
        console.log("Click4");
    }

}
