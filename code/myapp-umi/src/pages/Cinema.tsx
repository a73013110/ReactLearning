import React from 'react'
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { useNavigate } from 'umi'
import { connect } from 'dva'

function Cinema(props: any) {
    const navigate = useNavigate()
    
    return (
        <div>
            <NavBar back={props.cityName} backArrow={false} onBack={() => {
                navigate("/city")
            }} right={<SearchOutline />}>標題</NavBar>
            Cinema
        </div>
    )
}

export default connect((state: any) => {
    return {
        cityName: state.city.cityName
    }
})(Cinema)