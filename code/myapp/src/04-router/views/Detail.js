import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function Detail(props) {

    const params = useParams()
    const location = useLocation();

    useEffect(() => {
        console.log("Params", params)
        // console.log("Location", location)
    }, [])

    return (
        <div>Detail</div>
    )
}
