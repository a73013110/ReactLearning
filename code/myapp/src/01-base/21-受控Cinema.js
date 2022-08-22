import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor() {
        super();

        this.state = {
            cinemaList: []
            // , cinemaListBak: []
            , myText: ""
        }

        // axios第三方庫，專門用來請求資料
        axios({
            // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            , method: "get"
        }).then(res => {
            console.log(res.data.data.epg)

            this.setState({
                cinemaList: res.data.data.epg
                // , cinemaListBak: res.data.data.epg
            })
        }).catch(e => {
            console.log(e)
        })
    }

    render() {
        return (
            <div>
                {/* {this.state.myText} */}
                <input value={this.state.myText} onChange={(evt) => {
                    this.setState({
                        myText: evt.target.value
                    })
                }} />
                {
                    this.getCienmaList().map(item =>
                        <dl key={item.defaultTvId}>
                            <dt>{item.name}</dt>
                            <dd>{item.focus}</dd>
                        </dl>
                    )
                }
            </div>
        )
    }

    getCienmaList() {
        return this.state.cinemaList.filter(item => 
            item.name.toUpperCase().includes(this.state.myText.toUpperCase()) ||
            item.focus.toUpperCase().includes(this.state.myText.toUpperCase())
        )
    }

    // handleInput = (event) => {
    //     console.log(event.target.value)

    //     var newList = this.state.cinemaListBak.filter(item => 
    //         item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
    //         item.focus.toUpperCase().includes(event.target.value.toUpperCase())
    //     )
    //     this.setState({
    //         cinemaList: newList
    //     })

    //     console.log(this.state.cinemaList);
    // }
}
