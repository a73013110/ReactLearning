import { connect } from 'dva'
import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'

class App extends Component {
    componentDidMount() {
        console.log(this.props.isShow)
    }

    render() {
        return (
            <div>App
                {this.props.children}
                {this.props.isShow && <Tabbar />}
            </div>
        )
    }
}

export default connect((state) => {
    return {
        isShow: state.maizuo.isShow
    }
})(App)