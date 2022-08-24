import { useNavigate } from "react-router-dom"


export default function Login() {

    const navigate = useNavigate()

    return (
        <div>
            <input type="text" />
            <button onClick={() => {
                localStorage.setItem("token", "123")
                navigate("/films")
            }}>登入</button>
        </div>
    )
}
