import React, { Component } from 'react'

export default class App extends Component {

    a = 100;

    render() {
        return (
            <div>
                <input />
                
                <button onClick={() => {
                    console.log("Click1", this.a);
                }}>add1</button>

                {/* 不推薦 */}
                <button onClick={this.handleClick2.bind(this)}>add2-不推薦</button>
                {/* 推薦 */}
                <button onClick={this.handleClick3}>add3-推薦</button>
                {/* 最推薦(傳參數) */}
                <button onClick={() => this.handleClick4()}>add4-最推薦</button>
            </div>
        )
    }

    handleClick2() {
        console.log("Click2", this.a);    // 無法調用this.a，因此function是透過button事件調用，所以this非App Class，必須透過bind(this)來將this指向App Class
    }

    handleClick3 = () => console.log("Click3", this.a);
    
    handleClick4() {
        console.log("Click4", this.a);
    }

}
