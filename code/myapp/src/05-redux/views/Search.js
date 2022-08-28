import React, { useState, useEffect, useMemo } from 'react'
import store from '../redux/stroe'
import getCinemaListAction from '../redux/actionCreator/CinemaListAction'

export default function Search() {
    const [searchText, setSearchText] = useState("")
    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

    useEffect(() => {
        console.log(cinemaList)
        if (store.getState().CinemaListReducer.list.length === 0) {
            store.dispatch(getCinemaListAction())
        }
        else {
            console.log("Store緩存")
        }

        let unsubscribe = store.subscribe(() => {
            console.log("Cinema中訂閱", store.getState())
            setCinemaList(store.getState().CinemaListReducer.list)
        })
        // 銷毀此組件時必須清除訂閱
        return () => {
            unsubscribe()
        }
    }, [])

    const getCinemaList = useMemo(() => {
        return cinemaList.filter(item =>
            item.name.toUpperCase().includes(searchText.toUpperCase()) ||
            item.desc.toUpperCase().includes(searchText.toUpperCase()) 
        )
    }, [searchText, cinemaList])

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
