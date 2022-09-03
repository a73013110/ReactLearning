import { autorun } from 'mobx'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import store from '../mobx/store'

export default function Cenimas() {
    const navigate = useNavigate()
    // const [cityName, setCityName] = useState("")
    const [cinemaList, setCinemaList] = useState([])

    useEffect(() => {
        if (store.list.length === 0) {
            store.getList()
        }

        var unsubscribe = autorun(() => {
            console.log(store.list)
            setCinemaList(store.list)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    return (
        <div>
            <ul>
                {
                    cinemaList.map(item =>
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
