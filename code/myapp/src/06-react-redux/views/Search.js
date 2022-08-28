import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getCinemaListAction from '../redux/actionCreator/CinemaListAction'

export default function Search() {
    const CinemaListReducer = useSelector(state => state.CinemaListReducer)
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        if (CinemaListReducer.list.length === 0) {
            dispatch(getCinemaListAction())
        }
        else {
            console.log("Store緩存")
        }
    }, [CinemaListReducer.list])

    const getCinemaList = useMemo(() => {
        return CinemaListReducer.list.filter(item =>
            item.name.toUpperCase().includes(searchText.toUpperCase()) ||
            item.desc.toUpperCase().includes(searchText.toUpperCase()) 
        )
    }, [searchText, CinemaListReducer.list])

    return (
        <div>
            <input value={searchText} onChange={(evt) => {
                setSearchText(evt.target.value)
            }} />
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
