import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import './NewsSandBox.css'
const { Content } = Layout;

export default function NewsSandBox() {
    NProgress.start();
    NProgress.done();

    return (
        <Layout>
            <SideMenu></SideMenu>
            <Layout className="site-layout">
                <TopHeader></TopHeader>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflow: "auto"
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
