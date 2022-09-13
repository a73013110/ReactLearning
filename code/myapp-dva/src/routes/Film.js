import React, { Component } from 'react'
import request from '../utils/request'

export default class Film extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        request("/test.json").then(res => {
            console.log(res.data.data.films)
            this.setState({
                list: res.data.data.films
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.list.map(item => <li key={item.filmId} onClick={() => {
                        this.props.history.push(`/detail/${item.filmId}`)
                    }}>
                        <img src={item.poster} alt={item.name} style={{ width: "100px" }} />
                        <p>{item.name}</p>
                    </li>)
                }
            </div>
        )
    }
}
