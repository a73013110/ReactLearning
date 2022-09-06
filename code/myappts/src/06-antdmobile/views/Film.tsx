import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, Swiper } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

interface IItem {
    filmId: number,
    name: string,
    poster: string,
    synopsis: string,
    [propsName: string]: any
}

interface ILoopList {
    description: string,
    id: string,
    link: string,
    posterUrl: string,
    title: string,
    [propsName: string]: string
}

export default function Film() {
    const [list, setList] = useState<Array<IItem>>([]);
    const [loopList, setLoopList] = useState<Array<ILoopList>>([])

    const navigate = useNavigate();

    const loopSwiperRef = React.createRef<SwiperRef>();

    useEffect(() => {
        axios({
            url: "/test.json"
        }).then(res => {
            console.log(res.data.data.films)
            setList(res.data.data.films)
        })

        axios({
            url: "https://api.linetv.tw/v2/index?appId=062097f1b1f34e11e7f82aag22000aee&chocomemberAppId=86a6b258-ac30-4816-bc14-a31e514226d7&version=9.95.1&countryCode=TW&languageId=zh",
        }).then(res => {
            console.log(res.data[0].datas)
            setLoopList(res.data[0].datas)
        })

    }, [])

    return (
        <div>
            <Swiper ref={loopSwiperRef} autoplay={true} loop={true}>
                {
                    loopList.map(item => <Swiper.Item key={item.id}>
                        <img src={item.posterUrl} alt={item.title} style={{ width: "100%" }} />
                    </Swiper.Item>)
                }
            </Swiper>
            <div>
                <Button color="danger" onClick={() => {
                    loopSwiperRef.current?.swipePrev();
                }}>上一個</Button>
                <Button color="primary" onClick={() => {
                    loopSwiperRef.current?.swipeNext();
                }}>下一個</Button>
            </div>
            <ul>
                {
                    list.map(item => <li key={item.filmId} onClick={() => {
                        navigate(`/detail/${item.filmId}`)
                    }}>
                        {item.name}
                    </li>)
                }
            </ul>
        </div>
    )
}
