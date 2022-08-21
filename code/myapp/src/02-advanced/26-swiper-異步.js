import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

Swiper.use([Navigation, Pagination]);

export default class App extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        console.log("componentDidMount")

        setTimeout(() => {
            this.setState({
                list: ["aaa", "bbb", "ccc"]
            })
        }, 1000);

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        new Swiper(".swiper", {
            // direction: 'vertical', // 垂直切換選項
            loop: true, // 循環模式選項

            // 如果需要分頁器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前進後退按鈕
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滾動條
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    }

    render() {
        return (
            <div>
                <div className="swiper" style={{ height: "200px", background: "yellow" }}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item => <div className="swiper-slide" key={item}>{item}</div>)
                        }
                    </div>
                    {/* <!-- 如果需要分頁器 --> */}
                    <div className="swiper-pagination"></div>

                    {/* <!-- 如果需要導航按鈕 --> */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    {/* <!-- 如果需要滾動條 --> */}
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        )
    }
}
