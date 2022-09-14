import React, { Component } from 'react'
import { withRouter } from 'dva/router'
import request from '../utils/request'

export default class Center extends Component {
    componentDidMount() {
        request("/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=F6812C901C9C11EDABA1E3CF9445FF11557745DA670F42469F6CEA04C65E7E7D&optimus_risk_level=71&optimus_code=10").then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>Center
                <WithChild />
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return <div>
            <button onClick={() => {
                localStorage.removeItem("token")
                this.props.history.push("/login")
            }}>退出Center</button>
        </div>
    }
}

const WithChild = withRouter(Child)