import React, { Component } from 'react'
import request from '../utils/request'

export default class Login extends Component {
    username = React.createRef()
    password = React.createRef()

    render() {
        return (
            <div>
                帳號:
                <input type="text" ref={this.username} />
                <br />
                密碼:
                <input type="password" ref={this.password} />

                <button onClick={() => {
                    console.log(this.username.current.value, this.password.current.value)
                    request("/user/login", {
                        method: "POST",
                        body: JSON.stringify({
                            username: this.username.current.value,
                            password: this.password.current.value
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(res => {
                        console.log(res.data)
                        if (res.data.ok) {
                            localStorage.setItem("token", "1fejfnkj31h2sb14bbr")
                            this.props.history.push("/center")
                        }
                        else {
                            alert("帳號密碼錯誤")
                        }
                    })
                }}>登入</button>
            </div>
        )
    }
}
