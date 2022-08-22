import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

function useCinemaList() {
    const [cinemaList, setCinemaList] = useState([])

    useEffect(() => {
        // axios第三方庫，專門用來請求資料
        axios({
            // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            , method: "get"
        }).then(res => {
            console.log(res.data.data.epg)
            setCinemaList(res.data.data.epg)
        }).catch(e => {
            console.log(e)
        })
    }, [])
    
    return {
        cinemaList
    }
}

function useFilter(cinemaList, myText) {
    const getCienmaList = useMemo(() => {
        return cinemaList.filter(item =>
            item.name.toUpperCase().includes(myText.toUpperCase()) ||
            item.focus.toUpperCase().includes(myText.toUpperCase())
        )
    }, [cinemaList, myText])
    
    return {
        getCienmaList
    }
}

export default function Cinema() {

    const [myText, setMyText] = useState("")
    const { cinemaList } = useCinemaList()
    const { getCienmaList } = useFilter(cinemaList, myText)

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