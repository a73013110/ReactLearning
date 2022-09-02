import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function withRouter(Component) {
    return function (props) {
        const push = useNavigate()
        const match = useParams()
        const location = useLocation()
        return <Component a="1" {...props} history={{ push, match, location }} />
    }
}
