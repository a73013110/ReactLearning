import { Avatar, Dropdown, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleCollapsed } from '../../slices/collapsedSlice';
import { setUserInfo } from '../../slices/authSlice';
import { IUser } from '../../interface/user/IUser';

const { Header } = Layout;

export default function TopHeader() {
    const isCollapsed = useAppSelector(state => state.collapsed.isCollapsed);
    const dispatch = useAppDispatch();
    const navigete = useNavigate();
    const userInfo = useAppSelector(state => state.auth.userInfo);

    const changeCollapsed = () => {
        dispatch(toggleCollapsed());
    }

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: userInfo.role.roleName,
                },
                {
                    key: '99',
                    danger: true,
                    label: '登出',
                    onClick: () => {
                        dispatch(setUserInfo({} as IUser));
                        navigete("/login");
                    }
                },
            ]}
        />
    );

    return (
        <Header className="site-layout-background" style={{ padding: "0px 16px" }}>
            {
                isCollapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />
            }

            <div style={{ float: "right" }}>
                <span>歡迎<span style={{ color: "#1890ff" }}>{userInfo.username}</span>回來</span>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}
