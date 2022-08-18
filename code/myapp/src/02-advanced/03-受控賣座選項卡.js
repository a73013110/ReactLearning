import React, { Component } from 'react'
import './css/02-賣座.css'

import Film from './賣座Component2/Film'
import Cinema from './賣座Component2/Cinema'
import Center from './賣座Component2/Center'
import Tabbar from './賣座Component2/Tabbar'
import TabbarFun from './賣座Component2/TabbarFun'
import Navbar from './賣座Component2/Navbar'

export default class App extends Component {

    state = {
        list: [
            {
                id: 1
                , text: "電影"
            }
            , {
                id: 2
                , text: "影院"
            }
            , {
                id: 3
                , text: "我的"
            }
        ],       
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

                <TabbarFun event={(index) => {
                    console.log("Tabbar");
                    this.setState({
                        current: index
                    })
                }} current={this.state.current} list={this.state.list} />
            </div>
        )
    }
}
