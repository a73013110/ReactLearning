import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCinemaListAction, getCinemaListActionPromise, getCinemaListActionAsync } from '../redux/actionCreator/CinemaListAction'

import { cinemaActions } from '../redux/slices/CinemaSlice'

export default function Cenimas() {
    const navigate = useNavigate()
    const city = useSelector(state => state.city)
    const cinema = useSelector(state => state.cinema)
    const dispatch = useDispatch()

    useEffect(() => {
        if (cinema.list.length === 0) {
            // store.dispatch(getCinemaListAction())
            // store.dispatch(getCinemaListActionPromise())
            dispatch(cinemaActions.changeList(getCinemaListActionAsync()))
        }
        else {
            console.log("Store緩存")
        }
    }, [cinema.list])

    return (
        <div>
            <div style={{ overflow: "hidden" }}>
                <div onClick={() => {
                    navigate("/city")
                }} style={{float: "left"}}>{city.cityName}</div>
                <div onClick={() => {
                    navigate("/cinema/search")
                }} style={{float: "right"}}>查詢</div>
            </div>
            <ul>
                {
                    cinema.list.map(item =>
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
