import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getCinemaListAction from '../redux/actionCreator/CinemaListAction'
import { SearchBar } from 'antd-mobile'

import { cinemaActions } from '../redux/slices/CinemaSlice'

export default function Search() {
    const cinema = useSelector(state => state.cinema)
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        if (cinema.list.length === 0) {
            dispatch(cinemaActions.changeList(getCinemaListAction()))
        }
        else {
            console.log("Store緩存")
        }
    }, [cinema.list])

    const getCinemaList = useMemo(() => {
        return cinema.list.filter(item =>
            item.name.toUpperCase().includes(searchText.toUpperCase()) ||
            item.desc.toUpperCase().includes(searchText.toUpperCase())
        )
    }, [searchText, cinema.list])

    return (
        <div>
            {/* <input value={searchText} onChange={(evt) => {
                setSearchText(evt.target.value)
            }} /> */}
            <div style={{ padding: "10px" }}>
                <SearchBar placeholder='請輸入內容' value={searchText}
                    onChange={(value) => {
                        setSearchText(value)
                    }}
                    showCancelButton={() => true} />
            </div>
            <ul>
                {
                    getCinemaList.map(item =>
                        <li key={item.qipuId} style={{ padding: "10px" }}>
                            <dt>{item.name}</dt>
                            <dd style={{ fontSize: "12px", color: "gray" }}>{item.desc}</dd>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
