import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    state = {
        type: 1
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>現正熱映</li>
                    <li onClick={() => {
                        this.setState({
                            type: 2
                        })
                    }}>即將上映</li>
                </ul>

                <FilmList type={this.state.type}></FilmList>
            </div>
        )
    }
}

class FilmList extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        console.log(this.props.type)
        if (this.props.type === 1) {
            console.log("現正熱映資料")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films)
                this.setState({
                    list:res.data.data.films
                })
            })
        }
        else {
            console.log("即將上映資料")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films)
                this.setState({
                    list:res.data.data.films
                })
            })
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(nextProps.type)
        if (nextProps.type === 1) {
            console.log("現正熱映資料")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films)
                this.setState({
                    list:res.data.data.films
                })
            })
        }
        else {
            console.log("即將上映資料")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films)
                this.setState({
                    list:res.data.data.films
                })
            })
        }
    }

    render() {
        return <ul>
            {
                this.state.list.map(item => <li key={item.filmId}>{item.name}</li>)
            }
        </ul>
    }
}