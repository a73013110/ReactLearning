import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface IItem {
    filmId: number,
    name: string,
    poster: string,
    synopsis: string,
    [propsName: string]: any
}

export default function Film() {
    const [list, setList] = useState<Array<IItem>>([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios({
            url: "/test.json"
        }).then(res => {
            console.log(res.data.data.films)
            setList(res.data.data.films)
        })

    }, [])

    return (
        <div>
            <ul>
                {
                    list.map(item => <li key={item.filmId} onClick={() => {
                        navigate(`/detail/${item.filmId}`)
                    }}>
                        {item.name}
                    </li>)
                }
            </ul>
        </div>
    )
}
