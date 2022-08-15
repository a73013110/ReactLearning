import React, { Component } from 'react'

export default class App extends Component {

    state = {
        count: 0
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleAdd1}>Add1</button>
                <button onClick={this.handleAdd2}>Add2</button>
            </div>
        )
    }

    /**
     * 結論：同步邏輯中：setState為異步執行
     */
    handleAdd1 = () => {
        this.setState({
            count: this.state.count+1
        })

        console.log(this.state.count);
        
        this.setState({
            count: this.state.count+1
        })

        console.log(this.state.count);
        
        this.setState({
            count: this.state.count+1
        })

        console.log(this.state.count);
    }

    /**
     * 結論：異步邏輯中：setState為異步執行(與教學影片裡的結果不一樣，影片中顯示異步邏輯setState為同步執行)
     * !!!!!!!!!!!!感覺目前在異步邏輯，setState會合併State，並以最新的為主!!!!!!!!!!!!
     * setState的第二個參數：回調函數，當setState執行完成後呼叫的function
     */
    handleAdd2 = () => {

        setTimeout(() => {
            this.setState({
                count: this.state.count+1
            }, () => {
                console.log(this.state.count)
            })
    
            // console.log(this.state.count);
            
            this.setState({
                count: this.state.count+2
            }, () => {
                console.log(this.state.count)
            })
    
            // console.log(this.state.count);
            
            this.setState({
                count: this.state.count+3
            }, () => {
                console.log(this.state.count)
            })
    
            // console.log(this.state.count);
            
        }, 0);

    }
}

