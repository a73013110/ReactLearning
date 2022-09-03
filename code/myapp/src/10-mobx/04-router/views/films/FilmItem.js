import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FilmItem(item) {
    const navigate = useNavigate()

    const handleChangePage = (id) => {
        // window.location.href = "#/detail/" + id
        // navigate(`/detail?id=${id}`)
        navigate(`/detail/${id}`)
        // navigate(`/detail`, { state: { myid: id } })
    }

    return (
        <li onClick={() => handleChangePage(item.filmId)}>{item.name}</li>
    )
}
