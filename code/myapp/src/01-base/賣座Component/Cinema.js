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
            url: "https://pcw-api.iq.com/api/lego/hot?platformId=4&modeCode=ntw&langCode=zh_tw&deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&sid=1bf4c1d372a30a38baa3a4e0e7bd462c_1660468170250"
            , method: "get"
        }).then(res => {
            console.log(res.data.data)

            this.setState({
                cenimaList: res.data.data
                , cenimaListBak: res.data.data
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

        console.log(newList);
    }
}
