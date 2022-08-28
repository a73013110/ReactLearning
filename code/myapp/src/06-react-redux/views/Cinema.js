import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCinemaListAction, getCinemaListActionPromise, getCinemaListActionAsync } from '../redux/actionCreator/CinemaListAction'
import store from '../redux/stroe'

export default function Cenimas() {
    const navigate = useNavigate()
    const [cityName, setCityName] = useState(store.getState().CityReducer.cityName)
    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            // store.dispatch(getCinemaListAction())
            // store.dispatch(getCinemaListActionPromise())
            store.dispatch(getCinemaListActionAsync())
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


    return (
        <div>
            <div style={{ overflow: "hidden" }}>
                <div onClick={() => {
                    navigate("/city")
                }} style={{float: "left"}}>{cityName}</div>
                <div onClick={() => {
                    navigate("/cinema/search")
                }} style={{float: "right"}}>查詢</div>
            </div>
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
