import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, List, Row } from 'antd'
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
    const barRef = useRef(null);

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
            renderBarView(_.groupBy(res.data, (item: INews) => item.category?.title));
        })

        return () => {
            window.onresize = null;
        }
    }, [])

    const renderBarView = (obj: any) => {
        var myChart = echarts.init(barRef.current as unknown as HTMLDivElement);

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

        myChart.setOption(option);

        window.onresize = () => {
            myChart.resize();
        }
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
                            <SettingOutlined key="setting" />,
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

            <div ref={barRef} style={{ width: "100%", height: "400px", marginTop: "30px" }}></div>
        </div>
    )
}
