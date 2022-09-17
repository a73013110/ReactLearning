import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'umi'

export default function Nowplaying() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("/test.json").then(res => {
            console.log(res.data.data.films);
            setList(res.data.data.films);
        })
    }, [])

    return (
        <div>
            <ul>
                {
                    list.map((item: any) => <li key={item.filmId} onClick={() => {
                        navigate(`/detail/${item.filmId}`)
                    }}>
                        {item.name}
                    </li>)
                }
            </ul>
        </div>
    )
}
