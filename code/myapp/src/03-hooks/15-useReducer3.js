import React, { useEffect, useContext, useReducer } from 'react'
import axios from 'axios'

import './css/index.css'

const GlobalContext = React.createContext()

const initialState = {
    info: "",
    filmList: []
}

const reducer = (prevState, action) => {
    var newState = { ...prevState }
    switch (action.type) {
        case "change-filmlist":
            newState.filmList = action.value
            break;
        case "change-info":
            newState.info = action.value
            break;
        default:
            break;
    }
    return newState
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`/test.json`).then(res => {
            console.log(res.data.data.films)
            dispatch({
                type: "change-filmlist",
                value: res.data.data.films
            })
        })
    }, [])

    return (
        <GlobalContext.Provider value={
            {
                state,
                dispatch
            }
        }>
            <div>
                {
                    state.filmList.map(item =>
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
    const { dispatch } = useContext(GlobalContext)

    return <div className='fileItem' onClick={() => {
        console.log(synopsis)
        dispatch({
            type: "change-info",
            value: synopsis
        })
    }}>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>觀眾評分：{grade}</div>
    </div>
}

function FilmDetail() {
    const { state } = useContext(GlobalContext)
    return <div className='filmDetail'>
        {state.info}
    </div>
}