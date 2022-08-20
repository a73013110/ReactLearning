import React, { Component } from 'react'

class Child extends Component {
    render() {
        return <div>
            child

            {this.props.children}
        </div>
    }
}

class Swiper extends Component {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Swiper>
                    <div>11111</div>
                    <div>22222</div>
                    <div>33333</div>
                </Swiper>
                <Swiper>
                    <p>11111</p>
                    <p>22222</p>
                    <p>33333</p>
                </Swiper>

                <Child>
                    <div>1111</div>
                </Child>
            </div>
        )
    }
}
