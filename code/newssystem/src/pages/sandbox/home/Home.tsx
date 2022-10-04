import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Drawer, List, Row } from 'antd'
import axios from 'axios';
import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';
import { INews } from '../../../interface/news/INews';
import { useAppSelector } from '../../../redux/hooks';
import _ from 'lodash';

type EChartsOption = echarts.EChartsOption;

const { Meta } = Card;

export default function Home() {
    const userInfo = useAppSelector(state => state.auth.userInfo);
    const [viewList, setViewList] = useState<INews[]>([]);
    const [starList, setStarList] = useState<INews[]>([]);
    const [allList, setAllList] = useState<INews[]>([])
    const barRef = useRef(null);
    const pieRef = useRef(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get("/news?publishState=2&_expand=category&_sort=view&_order=desc&_limit=6").then(res => {
            setViewList(res.data);
        })
    }, [])

    useEffect(() => {
        axios.get("/news?publishState=2&_expand=category&_sort=star&_order=desc&_limit=6").then(res => {
            setStarList(res.data);
        })
    }, [])

    useEffect(() => {
        axios.get("/news?publishState=2&_expand=category").then(res => {
            // console.log(res.data)
            setAllList(res.data);
            renderBarView(_.groupBy(res.data, (item: INews) => item.category?.title));
        })

        return () => {
            window.onresize = null;
        }
    }, [])

    const renderBarView = (obj: any) => {
        let barChart = echarts.getInstanceByDom(barRef.current as unknown as HTMLDivElement)
        if (!barChart) {
            barChart = echarts.init(barRef.current as unknown as HTMLDivElement);
        }

        const option: EChartsOption = {
            title: {
                text: "新聞分類圖示"
            },
            tooltip: {},
            legend: {
                data: ['數量']
            },
            xAxis: {
                data: Object.keys(obj),
                axisLabel: {
                    rotate: 45
                }
            },
            yAxis: {
                minInterval: 1
            },
            series: [
                {
                    name: '數量',
                    type: 'bar',
                    data: Object.values<[]>(obj).map(item => item.length)
                }
            ]
        };

        barChart.setOption(option);

        window.onresize = () => {
            barChart?.resize();
        }
    }

    const renderPieView = () => {
        let currentList = allList.filter(item => item.author === userInfo.username);
        let groupObj = _.groupBy(currentList, (item: INews) => item.category?.title);

        let list = [];
        for (const obj in groupObj) {
            list.push({
                name: obj,
                value: groupObj[obj].length
            })
        }

        let pieChart = echarts.getInstanceByDom(pieRef.current as unknown as HTMLDivElement)
        if (!pieChart) {
            pieChart = echarts.init(pieRef.current as unknown as HTMLDivElement);
        }

        const option: EChartsOption = {
            title: {
                text: "當前用戶新聞分類圖示",
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: "發布數量",
                    type: 'pie',
                    radius: '50%',
                    data: list,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        pieChart.setOption(option);
    }

    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="用戶最常瀏覽" bordered={true}>
                        <List
                            size="small"
                            dataSource={viewList}
                            renderItem={item => <List.Item><a href={`#/news-manage/preview/${item.id}`}>{item.title}</a></List.Item>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="用戶點讚最多" bordered={true}>
                        <List
                            size="small"
                            dataSource={starList}
                            renderItem={item => <List.Item><a href={`#/news-manage/preview/${item.id}`}>{item.title}</a></List.Item>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" onClick={() => { setOpen(true) }} />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={userInfo.username}
                            description={<div>
                                <b>{userInfo.region ? userInfo.region : "全球"}</b>
                                <span style={{ paddingLeft: "10px" }}>{userInfo.role.roleName}</span>
                            </div>}
                        />
                    </Card>
                </Col>
            </Row>

            <Drawer
                title="個人新聞分類"
                placement="right"
                onClose={() => setOpen(false)}
                open={open}
                afterOpenChange={(open) => {
                    if (open) {
                        renderPieView();
                    }
                }}
                width="500px"
            >
                <div ref={pieRef} style={{ width: "100%", height: "400px", marginTop: "30px" }}></div>
            </Drawer>

            <div ref={barRef} style={{ width: "100%", height: "400px", marginTop: "30px" }}></div>
        </div>
    )
}
