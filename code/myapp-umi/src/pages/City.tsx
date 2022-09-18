import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IndexBar, List } from 'antd-mobile'
import { useNavigate } from 'umi'

interface ICity {
    cityId: number,
    name: string,
    pinyin: string,
    isHot: number
}

interface IList {
    title: string,
    items: Array<ICity>
}

export default function City() {
    const navigate = useNavigate();
    const [list, setList] = useState<Array<IList>>()

    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?k=8415463",
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660999619785171561316353"}',
                "X-Host": "mall.film-ticket.city.list"
            }
        }).then(res => {
            setList(filterCity(res.data.data.cities));
        })
    }, [])

    const filterCity = (cities: Array<ICity>): Array<IList> => {
        const newList = [];
        let letterArray: Array<string> = [];
        for (var i = 65; i < 91; i++) {
            letterArray.push(String.fromCharCode(i));
        }
        for (var m in letterArray) {
            let cityItems = cities.filter((item: ICity) => item.pinyin.substring(0, 1).toUpperCase() === letterArray[m]);
            if (cityItems.length > 0) {
                newList.push({
                    title: letterArray[m],
                    items: cityItems
                });
            }
        }
        // console.log(newList)
        return newList;
    }

    const changeCity = (item: ICity) => {
        console.log(item);
        navigate("/cinema");
    }

    return (
        <div style={{ height: window.innerHeight }}>
            <IndexBar>
                {list?.map(group => {
                    const { title, items } = group
                    return (
                        <IndexBar.Panel index={title} title={title} key={title}>
                            <List>
                                {items.map((item, index) => (
                                    <List.Item key={index} onClick={() => {
                                        changeCity(item);
                                    }}>{item.name}</List.Item>
                                ))}
                            </List>
                        </IndexBar.Panel>
                    )
                })}
            </IndexBar>
        </div>
    )
}
