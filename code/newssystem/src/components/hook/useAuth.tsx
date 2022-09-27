import { IUser } from '../../interface/user/IUser';
import { useLocalStorage } from './useLocalStorage';

export default function useAuth() {
    const [userInfo, setUserInfo] = useLocalStorage<IUser>("token");
    const isLogin = userInfo && userInfo.id !== undefined && userInfo.id !== null

    return { userInfo, isLogin, setUserInfo };
}