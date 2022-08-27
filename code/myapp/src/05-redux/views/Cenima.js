import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import store from '../redux/stroe'

export default function Cenimas() {
    const navigate = useNavigate()
    const [cityName, setCityName] = useState(store.getState().CityReducer.cityName)

    return (
        <div>
            <div onClick={() => {
                navigate("/city")
            }}>{cityName}</div>
            Cenimas
        </div>
    )
}
