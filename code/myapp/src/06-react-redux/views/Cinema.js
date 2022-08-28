import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCinemaListAction, getCinemaListActionPromise, getCinemaListActionAsync } from '../redux/actionCreator/CinemaListAction'

export default function Cenimas() {
    const navigate = useNavigate()
    const CityReducer = useSelector(state => state.CityReducer)
    const CinemaListReducer = useSelector(state => state.CinemaListReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (CinemaListReducer.list.length === 0) {
            // store.dispatch(getCinemaListAction())
            // store.dispatch(getCinemaListActionPromise())
            dispatch(getCinemaListActionAsync())
        }
        else {
            console.log("Store緩存")
        }
    }, [CinemaListReducer.list])

    return (
        <div>
            <div style={{ overflow: "hidden" }}>
                <div onClick={() => {
                    navigate("/city")
                }} style={{float: "left"}}>{CityReducer.cityName}</div>
                <div onClick={() => {
                    navigate("/cinema/search")
                }} style={{float: "right"}}>查詢</div>
            </div>
            <ul>
                {
                    CinemaListReducer.list.map(item =>
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
