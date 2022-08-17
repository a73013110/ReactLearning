import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: [{
            id: 1,
            text: "1111",
            isChecked: false
        }, {
            id: 2,
            text: "2222",
            isChecked: false
        }, {
            id: 3,
            text: "3333",
            isChecked: false
        }]
        , myText: ""
    }

    render() {
        return (
            <div>
                <input value={this.state.myText} onChange={(evt) => {
                    this.setState({
                        myText: evt.target.value
                    })
                }} />

                <button onClick={this.AddOnClick}>add</button>

                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {/* {item.text} */}
                                <input type="checkbox" checked={item.isChecked} onChange={() => this.handleChecked(index)} />

                                {/* 副文本展示 */}
                                <span dangerouslySetInnerHTML={{
                                    __html: item.text
                                }} style={{textDecoration: item.isChecked ? "line-through" : ""}}  
                                ></span>

                                {/* <button onClick={this.DelOnClick.bind(this, index)}>del</button> */}
                                <button onClick={() => {
                                    this.DelOnClick(index);
                                }}>del</button>
                            </li>)
                    }
                </ul>

                {/* {this.state.list.length === 0 ? <div>暫無待辦事項</div> : null} */}
                {this.state.list.length === 0 && <div>暫無待辦事項</div>}
            </div>
        )
    }

    handleChecked = (index) => {

        let newList = [...this.state.list]
        newList[index].isChecked = !newList[index].isChecked;
        this.setState({
            list: newList
        })
    }

    AddOnClick = () => {
        console.log("Click1", this.state.myText);

        let newList = [...this.state.list]
        newList.push({
            id: Math.random() * 10000000,
            text: this.state.myText,
            isChecked: false
        })

        this.setState({
            list: newList,
            myText: ""  // 清空輸入框
        });
    }

    DelOnClick(index) {
        console.log("DelOnClick", index);

        let newList = this.state.list.slice();  // 與[...this.state.list]相同
        newList.splice(index, 1);

        this.setState({
            list: newList
        })
    }

}
