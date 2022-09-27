import { IUser } from '../../interface/user/IUser';
import { useLocalStorage } from './useLocalStorage';

export default function useAuth() {
    const [auth, setAuth ] = useLocalStorage("token");
    const userInfo = auth as IUser
    const isLogin = userInfo && userInfo.id !== undefined && userInfo.id !== null

    return { userInfo, isLogin, setAuth };
}