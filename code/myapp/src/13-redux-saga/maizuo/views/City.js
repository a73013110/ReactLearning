import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import store from '../redux/stroe'

export default function City() {
    const navigate = useNavigate()
    const [list, setList] = useState(["北京", "上海", "深圳", "廣州"])
    return (
        <div>City
            <ul>
                {
                    list.map(item =>
                        <li key={item} onClick={() => {
                            store.dispatch({
                                type: "change-city",
                                payload: item
                            })
                            // navigate("/cinema")
                            navigate(-1)
                        }}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}
