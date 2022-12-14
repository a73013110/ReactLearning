import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import { tabbarActions } from '../redux/slices/TabbarSlice'

export default function Detail() {
    // const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams.get("id"))
    // const params = useParams()
    const navigate = useNavigate()
    // console.log("Params", params)
    // const location = useLocation();
    // console.log("Location", location)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Detail Create")
        dispatch(tabbarActions.hide())
        return () => {
            console.log("Detail Destory")
            dispatch(tabbarActions.show())
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