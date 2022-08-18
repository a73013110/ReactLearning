import React, { Component } from 'react'

export default class Tabbar extends Component {

    render() {

        // 死循環...
        // this.setState({
        //     current: this.props.parentCurrent
        // })

        return (
            <div>
                <ul>
                    {
                        this.props.list.map((item, index) =>
                            <li key={item.id}
                                className={this.props.current === index ? "active" : ""}
                                onClick={() => this.handleClick(index)}
                            >{item.text}</li>)
                    }
                </ul>
            </div>
        )
    }

    handleClick(index) {
        // this.setState({
        //     current: index
        // })

        this.props.event(index);
    }
}
