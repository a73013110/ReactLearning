import React, { Component } from 'react'
import axios from 'axios'
import YSwiper from './swiper/Swiper'
import YSwiperItem from './swiper/SwiperItem'

export default class App extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         list: ["aaa", "bbbb", "ccccc"]
        //     })
        // }, 1000);
        axios({
            url: "https://m.maizuo.com/gateway?type=1&cityId=110100&k=7398342",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res => {
            console.log(res.data.data)
            this.setState({
                list: res.data.data
            })

        })
    }

    render() {
        return (
            <div>
                <YSwiper loop={true}>
                    {
                        this.state.list.map(item => 
                        <YSwiperItem key={item.bannerId}>
                            <img src={item.imgUrl} alt={item.name}
                            style={{width:"100%"}} />
                        </YSwiperItem>
                        )
                    }
                </YSwiper>
            </div>
        )
    }
}
