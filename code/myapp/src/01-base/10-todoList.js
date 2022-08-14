import React, { Component } from 'react'

export default class App extends Component {

    myRef = React.createRef()

    state = {
        list: [{
            id: 1
            , text: "1111"
        }, {
            id: 2
            , text: "2222"
        }, {
            id: 3
            , text: "3333"
        }]
    }

    render() {
        return (
            <div>
                <input ref={this.myRef} />

                <button onClick={this.AddOnClick}>add</button>

                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {/* {item.text} */}

                                {/* 副文本展示 */}
                                <span dangerouslySetInnerHTML={{
                                    __html: item.text
                                }}></span>

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

    AddOnClick = () => {
        console.log("Click1", this.myRef.current.value);

        let newList = [...this.state.list]
        newList.push({
            id: Math.random() * 10000000
            , text: this.myRef.current.value
        })

        this.setState({
            list: newList
        });

        // 清空輸入框
        this.myRef.current.value = "";
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
