import {
    UserOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import axios from 'axios';
import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import useAuth from '../hook/useAuth';
import './index.css'

const { Sider } = Layout;

interface IMenuItem {
    id?: number,
    key: string,
    label?: string,
    title?: string,
    icon: ReactElement,
    pagepermission?: number,
    grade?: number,
    children?: Array<IMenuItem>,
}

const iconList: { [key: string]: ReactElement } = {
    "/home": <HomeOutlined />,
    "/user-manage": <UserOutlined />,
    "/user-manage/list": <UserOutlined />,
    "/right-manage": <UserOutlined />,
    "/right-manage/role/list": <UserOutlined />,
    "/right-manage/right/list": <UserOutlined />,
    "/news-manage": <UserOutlined />,
    "/news-manage/add": <UserOutlined />,
    "/news-manage/draft": <UserOutlined />,
    "/news-manage/category": <UserOutlined />,
    "/audit-manage": <UserOutlined />,
    "/audit-manage/audit": <UserOutlined />,
    "/audit-manage/list": <UserOutlined />,
    "/publish-manage": <UserOutlined />,
    "/publish-manage/unpublished": <UserOutlined />,
    "/publish-manage/published": <UserOutlined />,
    "/publish-manage/sunset": <UserOutlined />
}

export default function SideMenu() {
    const isCollapsed = useAppSelector(state => state.collapsed.isCollapsed);
    const navigate = useNavigate();
    const location = useLocation();
    const [menu, setMenu] = useState([])
    const auth = useAuth();

    useEffect(() => {
        axios.get("/rights?_embed=children").then(res => {
            setMenu(res.data);
        })
    }, [])

    /**
     * 自動展開目前瀏覽功能
     */
    const getDefaultOpenKeys = useMemo(() => {
        let paths = location.pathname.split("/");
        // 若首個路徑為空，就移除
        if (paths && paths.length >= 1 && !paths[0].trim()) {
            paths.splice(0, 1);
        }
        // 移除最後一個
        paths.pop();
        // 於每個元素前加入/
        paths = paths.map(x => "/" + x);
        return paths;
    }, [location.pathname])

    const onClick: MenuProps["onClick"] = (e) => {
        // console.log("click", e.key);
        navigate(e.key);
    }

    /**
     * 取得Menu
     * @param list 從後端取得的Menu資料，也可能是children的值
     * @returns Antd Menu的input資料
     */
    const getMenu = useCallback((list: Array<IMenuItem> | undefined): Array<IMenuItem> => {
        let result: Array<IMenuItem> = [];
        list?.map((item: IMenuItem) => {
            // 篩選出頁面功能
            return item.pagepermission && auth.userInfo.role.rights.includes(item.key) && result.push({
                key: item.key,
                icon: iconList[item.key],
                label: item.title,
                children: (item.children && item.children.length !== 0) ? getMenu(item.children) : undefined,
            });
        });
        return result;
    }, [auth])


    return (
        <Sider trigger={null} collapsible collapsed={isCollapsed}>
            <div style={{ display: "flex", height: "100%", "flexDirection": "column" }}>
                <div className="logo">全球新聞發布管理系統</div>
                <div style={{ flex: 1, "overflow": "auto" }}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultOpenKeys={getDefaultOpenKeys}
                        selectedKeys={[location.pathname]}
                        items={getMenu(menu)}
                        onClick={onClick}
                    />
                </div>
            </div>
        </Sider>
    )
}
