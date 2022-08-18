import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor() {
        super();

        this.state = {
            cenimaList: []
            , cenimaListBak: []
        }

        // axios第三方庫，專門用來請求資料
        axios({
            // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            , method: "get"
        }).then(res => {
            console.log(res.data.data.epg)

            this.setState({
                cenimaList: res.data.data.epg
                , cenimaListBak: res.data.data.epg
            })
        }).catch(e => {
            console.log(e)
        })
    }

    render() {
        return (
            <div>
                <input onInput={this.handleInput}/>
                {
                    this.state.cenimaList.map(item => 
                        <dl key={item.defaultTvId}>
                            <dt>{item.name}</dt>
                            <dd>{item.focus}</dd>
                        </dl>
                    )
                }
            </div>
        )
    }

    handleInput = (event) => {
        console.log(event.target.value)

        var newList = this.state.cenimaListBak.filter(item => 
            item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
            item.focus.toUpperCase().includes(event.target.value.toUpperCase())
        )
        this.setState({
            cenimaList: newList
        })

        console.log(this.state.cenimaList);
    }
}
