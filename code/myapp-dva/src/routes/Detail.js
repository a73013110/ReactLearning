import React, { Component } from 'react'

export default class Detail extends Component {    
    componentDidMount() {
        console.log(this.props.match.params.myId)
    }

    render() {
        return (
            <div>Detail</div>
        )
    }
}
