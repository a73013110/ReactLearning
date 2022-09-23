import {
    UserOutlined
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const { Sider } = Layout;

const menuList = [
    {
        key: '/home',
        icon: <UserOutlined />,
        label: '首頁',
    },
    {
        key: '/user-manage',
        icon: <UserOutlined />,
        label: "用戶管理",
        children: [{
            key: "/user-manage/list",
            icon: <UserOutlined />,
            label: "用戶列表",
        }]
    },
    {
        key: '/right-manage',
        icon: <UserOutlined />,
        label: "權限管理",
        children: [{
            key: "/right-manage/role/list",
            icon: <UserOutlined />,
            label: "角色列表",
        },
        {
            key: "/right-manage/right/list",
            icon: <UserOutlined />,
            label: "權限列表",
        }]
    }
]

interface IMenuItem {
    id: number,
    key: string,
    label: string,
    pagepermisson: number,
    grade: number,
    children: Array<IMenuItem> | undefined,
}

/*
const click = (e) => {
    props.history.push(e.key)
}
const obj = (key, icon, label, children) => {
    return {
        key,
        icon,
        label,
        children,
    }
}
const dfs1 = (list) => {
    const arr = 【】
        list.map((item) => {
            if (item.children && item.children.length !== 0) {
                return arr.push(
                    obj(item.key, iconlist【item.key】, item.title, dfs1(item.children))
                )
            } else {
                return (
                    item.pagepermisson &&
                    arr.push(obj(item.key, iconlist【item.key】, item.title))
                )
            }
        })
    return arr
}
---------------------------------------------------------------------------------------------------
<Menu
	theme="dark"
	onClick={click}
	mode="inline"
	defaultSelectedKeys={【'1'】}
	items = { dfs1(list) }
>
	 {dfs(list)} 
    </Menu >
*/

export default function SideMenu() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/rights?_embed=children").then(res => {
            console.log(res.data)
            setMenu(res.data)
            console.log(getMenu(res.data))
        })
    }, [])


    const onClick: MenuProps["onClick"] = (e) => {
        // console.log("click", e.key);
        navigate(e.key);
    }

    const getMenuItem = (menuItem: IMenuItem) => {
        return {
            key: menuItem.key,
            icon: "",
            label: menuItem.label,
            children: menuItem.children,
        }
    }

    const getMenu = (list: Array<IMenuItem>): any => {
        let result: any = [];
        list.map((item: IMenuItem) => {
            if (item.children && item.children.length !== 0) {
                return result.push(getMenuItem(getMenu(item.children)));
            }
            else {
                return item.pagepermisson && result.push(getMenuItem(item));
            }
        });
        return result;
    }

    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <div className="logo">全球新聞發布管理系統</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={getMenu(menu)}
                onClick={onClick}
            />
        </Sider>
    )
}
