import { useState } from 'react'
import { IUser } from '../../interface/user/IUser';

export default function useAuth() {
    const token = localStorage.getItem("token");
    const [userInfo] = useState<IUser>(JSON.parse(token ? token : "{}"));
    const [isLogin] = useState(userInfo && userInfo.id !== undefined && userInfo.id !== null);

    return { userInfo, isLogin };
}