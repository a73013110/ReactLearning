import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cityActions } from '../redux/slices/CitySlice'

export default function City() {
    const navigate = useNavigate()
    const [list, setList] = useState(["北京", "上海", "深圳", "廣州"])
    const dispatch = useDispatch()
    
    return (
        <div>City
            <ul>
                {
                    list.map(item =>
                        <li key={item} onClick={() => {
                            dispatch(cityActions.changeCity(item))
                            // navigate("/cinema")
                            navigate(-1)
                        }}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}
