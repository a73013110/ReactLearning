import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import './css/index.css'

const GlobalContext = React.createContext()

export default function App() {

    const [filmList, setFilmList] = useState([])
    const [info, setInfo] = useState("")

    useEffect(() => {
        axios.get(`/test.json`).then(res => {
            console.log(res.data.data.films)
            setFilmList(res.data.data.films)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            call: "打電話",
            sms: "短信",
            info: info,
            changeInfo: (value) => {
                setInfo(value)
            }
        }}>
            <div>
                {
                    filmList.map(item =>
                        <FilmItem key={item.filmId} {...item}  ></FilmItem>
                    )
                }

                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}

function FilmItem(props) {
    let { name, poster, grade, synopsis } = props
    const value = useContext(GlobalContext)
    
    console.log(value)
    return <div className='fileItem' onClick={() => {
        console.log(synopsis)
        // props.onEvent(synopsis)
        value.changeInfo(synopsis)
    }}>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>觀眾評分：{grade}</div>
    </div>
}

function FilmDetail() {
    const value = useContext(GlobalContext)
    return <div className='filmDetail'>
        {value.info}
    </div>
}