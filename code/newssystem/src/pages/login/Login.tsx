import { Button, Form, Input, message } from 'antd'
import {
    LockOutlined,
    UserOutlined
} from '@ant-design/icons';
import LoginParticles from './LoginParticles'
import './Login.scss'
import axios, { AxiosResponse } from 'axios';
import { IUser } from '../../interface/user/IUser';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setUserInfo } from '../../slices/authSlice';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onFinish = (values: { username: string, password: string }) => {
        axios.get<any, AxiosResponse<IUser[], any>>(`/users?username=${values.username}&password=${values.password}&roleState=true&_expand=role`).then(res => {
            // console.log(res.data)
            if (res.data.length === 0) {
                message.error("帳號或密碼錯誤");
            }
            else {
                dispatch(setUserInfo(res.data[0]))
                navigate("/home");
            }
        })
    }

    return (
        <div style={{ background: "#001529", height: "100vh" }}>
            <LoginParticles />
            <div className="formContainer">
                <div className="loginTitle">全球新聞發布管理系統</div>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登入</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
