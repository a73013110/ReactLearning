import React, { Component } from 'react'
import axios from 'axios'

import './css/03-communication.css'

const GlobalContext = React.createContext()

export default class App extends Component {

    constructor() {
        super()

        this.state = {
            filmList: [],
            info: ""
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
            <GlobalContext.Provider value={{
                call: "打電話",
                sms: "短信",
                info: this.state.info,
                changeInfo: (value) => {
                    this.setState({
                        info: value
                    })
                }
            }}>
                <div>
                    {
                        this.state.filmList.map(item =>
                            <FilmItem key={item.filmId} {...item}  ></FilmItem>
                        )
                    }

                    <FilmDetail></FilmDetail>
                </div>
            </GlobalContext.Provider>
        )
    }
}

class FilmItem extends Component {

    render() {

        let { name, poster, grade, synopsis } = this.props

        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        console.log(value)
                        return <div className='fileItem' onClick={() => {
                            console.log(synopsis)
                            // this.props.onEvent(synopsis)
                            value.changeInfo(synopsis)
                        }}>
                            <img src={poster} alt={name} />
                            <h4>{name}</h4>
                            <div>觀眾評分：{grade}</div>
                        </div>
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        return <div className='filmDetail'>
                            {value.info}
                        </div>
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}
