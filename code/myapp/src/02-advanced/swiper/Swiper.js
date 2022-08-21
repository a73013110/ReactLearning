import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

Swiper.use([Navigation, Pagination]);

export default class YSwiper extends Component {

    componentDidMount() {
        new Swiper(".swiper", {
            // direction: 'vertical', // 垂直切換選項
            loop: this.props.loop, // 循環模式選項

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
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {this.props.children}
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
