import React from 'react'
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'

export default function Cinema() {
    return (
        <div>
            <NavBar back="北京" backArrow={false} onBack={() => {
                console.log("click")
            }} right={<SearchOutline />}>標題</NavBar>
            Cinema
        </div>
    )
}
