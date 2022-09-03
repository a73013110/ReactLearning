import React, { useEffect } from 'react'
import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom'

import store from '../mobx/store'

export default function Detail(props) {
    // const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams.get("id"))
    const params = useParams()
    const navigate = useNavigate()
    console.log("Params", params)
    // const location = useLocation();
    // console.log("Location", location)

    useEffect(() => {
        console.log("Creage")
        store.isTabbarShow = false;
        return () => {
            console.log("Destory")
            store.isTabbarShow = true;
        }
    }, [])

    return (
        <div>
            Detail
            <button onClick={() => {
                // setSearchParams({id:1000})
                navigate("/detail/1000")
            }}>猜您喜歡</button>
        </div>
    )
}
