import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

interface IParams {
    id?: string,
    [paramsName: string]: any
}

export default function Detail() {
    const location = useLocation()
    const params = useParams<IParams>()

    useEffect(() => {
        console.log(location, params)
    }, [])

    return (
        <div>
            Detail - {params.id}
        </div>
    )
}
