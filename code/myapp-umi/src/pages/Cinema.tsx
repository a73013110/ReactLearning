import React from 'react'
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { useNavigate } from 'umi'

export default function Cinema() {
    const navigate = useNavigate()

    return (
        <div>
            <NavBar back="北京" backArrow={false} onBack={() => {
                navigate("/city")
            }} right={<SearchOutline />}>標題</NavBar>
            Cinema
        </div>
    )
}
