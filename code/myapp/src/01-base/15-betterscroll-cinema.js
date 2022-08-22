import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {

    constructor() {
        super();

        this.state = {
            cinemaList: []
            , cinemaListBak: []
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
                , cinemaListBak: res.data.data.epg
            }, () => {
                new BetterScroll(".YikaiWrapper")
            })
            
            // new BetterScroll(".YikaiWrapper")    // 教學中此段語法OK，但事實上then內的setState動作似乎是異步，因此無法正常運作
            
        }).catch(e => {
            console.log(e)
        })
    }

    render() {
        return (
            <div>
                <input onInput={this.handleInput}/>
                <div className="YikaiWrapper" style={{height: "500px", overflow: "hidden"}}>
                    <div className="YikaiContent">
                        {
                            this.state.cinemaList.map(item => 
                                <dl key={item.defaultTvId}>
                                    <dt>{item.name}</dt>
                                    <dd>{item.focus}</dd>
                                </dl>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

    handleInput = (event) => {
        console.log(event.target.value)

        var newList = this.state.cinemaListBak.filter(item => 
            item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
            item.focus.toUpperCase().includes(event.target.value.toUpperCase())
        )
        this.setState({
            cinemaList: newList
        })

        console.log(this.state.cinemaList);
    }
}
