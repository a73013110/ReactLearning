import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FilmItem from './FilmItem'
import FilmItem_class from './FilmItem_class'

export default function Nowplaying(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        console.log("Nowplaying CTEATE")
        // axios第三方庫，專門用來請求資料
        // axios({
        //     // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
        //     url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=994837",
        //     headers: {
        //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16613345111022180741611521"}',
        //         'X-Host': 'mall.film-ticket.film.list'
        //     }
        // }).then(res => {
        axios.get("/test.json").then(res => {
            console.log(res.data.data.films)
            setList(res.data.data.films)
        }).catch(e => {
            console.log(e)
        })

        return () => {
            console.log("Nowplaying DESTROY")
        }
    }, [])

    return (
        <div>
            {
                list.map(item => 
                    <FilmItem key={item.filmId} {...item}></FilmItem>
                    // <FilmItem_class key={item.filmId} {...item}></FilmItem_class>
                )
            }
        </div>
    )
}
