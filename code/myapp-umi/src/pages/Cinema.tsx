import React, { useEffect } from 'react'
import { NavBar, DotLoading } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { useNavigate } from 'umi'
import { connect } from 'dva'

interface IList {
    filmId: string,
    name: string,

    [key: string]: string
}

function Cinema(props: any) {
    const navigate = useNavigate()
    useEffect(() => {
        if (props.list.length === 0) {
            props.dispatch({
                type: "cinema/getList",
                payload: {
                    cityId: props.cityId
                }
            })
        }
        else {
            console.log("緩存")
        }
    }, [])

    return (
        <div>
            <NavBar back={props.cityName} backArrow={false} onBack={() => {
                // 清空List，選擇玩區域後就會重新取得資料
                props.dispatch({
                    type: "cinema/clearList"
                })
                navigate("/city")
            }} right={<SearchOutline />}>標題</NavBar>

            {
                props.loading && <div style={{ fontSize: 14, textAlign: "center" }}>
                    <DotLoading />
                </div>
            }
            <ul>
                {
                    props.list.map((item: IList) => <li key={item.filmId}>
                        {item.name}
                    </li>)
                }
            </ul>
        </div >
    )
}

export default connect((state: any) => {
    // console.log(state)
    return {
        cityName: state.city.cityName,
        cityId: state.city.cityId,
        list: state.cinema.list,
        loading: state.loading.global
    }
})(Cinema)