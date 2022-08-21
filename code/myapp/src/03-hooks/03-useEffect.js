import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get("/test.json").then(res => {
            console.log(res.data)
            setList(res.data.data.films)
        })
    }, [])

    return (
        <div>
            {
                list.map(item => 
                    <li key={item.filmId}>{item.name}</li>
                )
            }
        </div>
    )
}
