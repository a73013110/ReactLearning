import React, { useState, useEffect } from 'react'
import { useNavigate, Link, Outlet, NavLink, useParams, useLocation } from 'react-router-dom'
import { Swiper, Tabs } from 'antd-mobile'
import axios from 'axios'

import style from './css/Film.module.css'

export default function Films() {

    const navigate = useNavigate()
    const location = useLocation()
    const [list, setList] = useState([])

    useEffect(() => {
        axios({
            url: "https://api.linetv.tw/v2/index?appId=062097f1b1f34e11e7f82aag22000aee&chocomemberAppId=86a6b258-ac30-4816-bc14-a31e514226d7&version=9.95.1&countryCode=TW&languageId=zh",
        }).then(res => {
            console.log(res.data[0].datas)
            setList(res.data[0].datas)
        })
    }, [])

    return (
        <div>
            <div style={{ height: "222px", background: "yellow" }}>
                <Swiper autoplay={true} loop={true}>
                    {
                        list.map(item =>
                            <Swiper.Item key={item.id}>
                                <img src={item.posterUrl} alt={item.name} style={{ width: "100%" }} />
                            </Swiper.Item>
                        )
                    }
                </Swiper>
            </div>

            {/* 吸頂功能，學起來!!! position: "sticky", top: 0 */}
            <div style={{ position: "sticky", top: 0, background: "white", zIndex: 1 }}>
                <Tabs onChange={(value) => {
                    navigate(value)
                }} activeKey={location.pathname}>
                    <Tabs.Tab title='正在熱映' key='/film/nowplaying'>
                    </Tabs.Tab>
                    <Tabs.Tab title='即將上映' key='/film/comingsoon'>
                    </Tabs.Tab>
                </Tabs>
            </div>

            {/* 路由容器 */}
            <Outlet></Outlet>
        </div>
    )
}
