import React, { Component } from 'react'
import { Button } from 'antd';

export default class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary"
                    ghost={true}
                    loading={true}
                    onClick={() => [
                        console.log("Hello world")
                    ]}>Primary Button</Button>
            </div>
        )
    }
}
