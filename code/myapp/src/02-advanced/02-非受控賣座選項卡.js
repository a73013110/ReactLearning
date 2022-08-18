import React, { Component } from 'react'
import './css/02-賣座.css'

import Film from './賣座Component/Film'
import Cinema from './賣座Component/Cinema'
import Center from './賣座Component/Center'
import Tabbar from './賣座Component/Tabbar'
import Navbar from './賣座Component/Navbar'

export default class App extends Component {

    state = {
        current: 0
    }

    showPage() {
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                <Navbar event={() => {
                    console.log("navbar");
                    this.setState({
                        current: 2
                    })
                }}></Navbar>
                {
                    this.showPage()
                }

                <Tabbar event={(index) => {
                    console.log("Tabbar");
                    this.setState({
                        current: index
                    })
                }} parentCurrent={this.state.current} />
            </div>
        )
    }
}
