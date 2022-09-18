import React, { useEffect, useState } from 'react'
import { useNavigate } from 'umi';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigete = useNavigate();
    useEffect(() => {
        // fetch("/users").then(res => res.json()).then(res => {
        //     console.log(res)
        // })
    }, []);


    return (
        <div>
            <input type="text" value={username} onChange={(evt) => {
                setUsername(evt.target.value);
            }} />
            <input type="password" value={password} onChange={(evt) => {
                setPassword(evt.target.value);
            }} />

            <button onClick={() => {
                fetch("/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }).then(res => res.json())
                .then(res => {
                    console.log(res)
                    if (res.ok) {
                        localStorage.setItem("token", username)
                        navigete("/center")
                    }
                    else {
                        alert("帳密錯誤")
                    }
                });
            }}>登入</button>
        </div>
    )
}
