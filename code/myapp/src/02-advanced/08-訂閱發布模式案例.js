import React, { Component } from 'react'
import axios from 'axios'

import './css/03-communication.css'

var bus = {
    list: [],
    // 訂閱
    subscribe(callback) {
        this.list.push(callback)
    },
    // 發布
    publish(para) {
        this.list.forEach(callback => {
            callback && callback(para)
        })
    }
}

export default class App extends Component {

    constructor() {
        super()

        this.state = {
            filmList: []
        }

        axios.get(`/test.json`).then(res => {
            console.log(res.data.data.films)
            this.setState({
                filmList: res.data.data.films
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.filmList.map(item =>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>
                    )
                }

                <FilmDetail></FilmDetail>
            </div>
        )
    }
}

class FilmItem extends Component {

    render() {

        let { name, poster, grade, synopsis } = this.props

        return <div className='fileItem' onClick={() => {
            // console.log(synopsis)
            bus.publish(synopsis)
        }}>
            <img src={poster} alt={name} />
            <h4>{name}</h4>
            <div>觀眾評分：{grade}</div>
        </div>
    }
}

class FilmDetail extends Component {
    constructor() {
        super()

        this.state = {
            info: ""
        }
        
        bus.subscribe((info) => {
            // console.log(info)
            this.setState({
                info: info
            })
        })
    }
    
    render() {
        return (
            <div className='filmDetail'>
                {this.state.info}
            </div>
        )
    }
}
