import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import { tabbarAction } from '../redux/slices/TabbarSlice'

interface IParams {
    id?: string,
    [paramsName: string]: any
}

export default function Detail() {
    const location = useLocation()
    const params = useParams<IParams>()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(location, params)
        dispatch(tabbarAction.hide())
        return () => {
            dispatch(tabbarAction.show())
        }
    }, [])

    return (
        <div>
            Detail - {params.id}
        </div>
    )
}
