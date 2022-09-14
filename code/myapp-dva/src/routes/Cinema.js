import { connect } from 'dva'
import React, { Component } from 'react'

class Cinema extends Component {
    componentDidMount() {
        console.log(this.props.list)
        if (this.props.list.length === 0) {
            this.props.dispatch({
                type: "maizuo/getCinemaList"
            })
        }
        else {
            console.log("緩存")
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.list.map(item => <li key={item.qipuId}>
                            {item.name}
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        list: state.maizuo.list
    }
})(Cinema)