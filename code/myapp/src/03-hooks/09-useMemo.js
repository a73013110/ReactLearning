import React, { Component, useState, useEffect, useMemo } from 'react'
import axios from 'axios'

export default function Cinema() {

    const [cenimaList, setCenimaList] = useState([])
    const [myText, setMyText] = useState("")

    useEffect(() => {
        // axios第三方庫，專門用來請求資料
        axios({
            // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            , method: "get"
        }).then(res => {
            console.log(res.data.data.epg)
            setCenimaList(res.data.data.epg)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    const getCienmaList = useMemo(() => {
        return cenimaList.filter(item =>
            item.name.toUpperCase().includes(myText.toUpperCase()) ||
            item.focus.toUpperCase().includes(myText.toUpperCase())
        )
    }, [cenimaList, myText])

    return (
        <div>
            {/* {this.state.myText} */}
            <input value={myText} onChange={(evt) => {
                setMyText(evt.target.value)
            }} />
            {
                getCienmaList.map(item =>
                    <dl key={item.defaultTvId}>
                        <dt>{item.name}</dt>
                        <dd>{item.focus}</dd>
                    </dl>
                )
            }
        </div>
    )
}


// export default class Cinema extends Component {

//     render() {
//         return (
//             <div>
//                 {/* {this.state.myText} */}
//                 <input value={this.state.myText} onChange={(evt) => {
//                     this.setState({
//                         myText: evt.target.value
//                     })
//                 }} />
//                 {
//                     this.getCienmaList().map(item =>
//                         <dl key={item.defaultTvId}>
//                             <dt>{item.name}</dt>
//                             <dd>{item.focus}</dd>
//                         </dl>
//                     )
//                 }
//             </div>
//         )
//     }

//     getCienmaList() {
//         return this.state.cenimaList.filter(item =>
//             item.name.toUpperCase().includes(this.state.myText.toUpperCase()) ||
//             item.focus.toUpperCase().includes(this.state.myText.toUpperCase())
//         )
//     }
// }
