import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Image, List, InfiniteScroll } from 'antd-mobile'

import FilmItem from './FilmItem'
import FilmItem_class from './FilmItem_class'

export default function Nowplaying(props) {
    const [list, setList] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        // 因為loadMore第一次都一定會觸發，因此直接讓useEffect不執行
        // axios.get("/test.json").then(res => {
        //     console.log(res.data.data.films)
        //     setList(res.data.data.films)
        // }).catch(e => {
        //     console.log(e)
        // })
    }, [])

    const loadMore = useCallback(() => {
        console.log("loadMore")
        setHasMore(false)
        axios.get("/test.json").then(res => {
            // console.log(res.data.data.films)
            setList([...list, ...res.data.data.films])
            setHasMore(res.data.data.films.length > 0)
        })
    }, [list, hasMore])

    return (
        <div>
            <List>
                {
                    list.map((item, index) => (
                        <List.Item
                            key={index} // 因為InfiniteScroll都是請求相同資料，若使用item.filmId，Chrome會因為key值重複而報錯，因此改用index
                            onClick={() => {
                                navigate(`/detail/${item.filmId}`)
                            }}
                            prefix={
                                <Image
                                    src={item.poster}
                                    style={{ borderRadius: 5 }}
                                    width={80}
                                />
                            }
                            description={<div>
                                <div>評分:{item.grade}</div>
                                <div>主演:{item.director}</div>
                                <div>類型:{item.category}</div>
                                <div>{item.nation}|{item.runtime}分鐘</div>
                            </div>}
                        >
                            {item.name}
                        </List.Item>
                    ))
                }
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    )
}
