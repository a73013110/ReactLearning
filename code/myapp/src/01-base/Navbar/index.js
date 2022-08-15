import React, { Component } from 'react'
import PropType from 'prop-types'

export default class Navbar extends Component {

    // 類屬性，注意：propTypes大小寫
    // static是必要的
    static propTypes = {
        title: PropType.string
        , leftShow: PropType.bool
    }

    // 默認屬性
    static defaultProps = {
        leftShow: true
    }

    render() {

        let { title, leftShow } = this.props

        return (
            <div>
                {leftShow && <button>返回</button>}
                Name - {title}
                <button>Home</button>
            </div>
        )
    }
}
