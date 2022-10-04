import { Descriptions, PageHeader } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import axios, { AxiosResponse } from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { INews } from '../../interface/news/INews';

interface IParams {
    id: string,
    [key: string]: string
}

export default function Detail() {
    const params = useParams<IParams>();
    const [newsInfo, setNewsInfo] = useState<INews>();

    useEffect(() => {
        axios.get<any, AxiosResponse<INews, any>>(`/news/${params.id}?_expand=category&_expand=role`).then(res => {
            // console.log(res.data);
            setNewsInfo({
                ...res.data,
                view: res.data.view + 1
            });
            return res.data
        }).then(res => {
            axios.patch(`/news/${params.id}`, {
                view: res.view + 1
            })
        });
    }, [params.id])

    const handleStar = () => {
        if (newsInfo) {
            setNewsInfo({
                ...newsInfo,
                star: newsInfo.star + 1
            });

            axios.patch(`/news/${params.id}`, {
                star: newsInfo.star + 1
            })
        }
    }

    return (
        <div>
            {
                newsInfo && <div>
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title={newsInfo.title}
                        subTitle={<div>{newsInfo.category?.title}<HeartTwoTone twoToneColor="#eb2f96" onClick={() => handleStar()} /></div>}
                    >
                        <Descriptions size="small" column={3}>
                            <Descriptions.Item label="創建者">{newsInfo.author}</Descriptions.Item>
                            <Descriptions.Item label="發布時間">{newsInfo.publishState ? moment(newsInfo.publishState).format("YYYY/MM/DD HH:mm:ss") : "-"}</Descriptions.Item>
                            <Descriptions.Item label="區域">{newsInfo.region}</Descriptions.Item>

                            <Descriptions.Item label="訪問數量">{newsInfo.view}</Descriptions.Item>
                            <Descriptions.Item label="點讚數量">{newsInfo.star}</Descriptions.Item>
                            <Descriptions.Item label="評論數量">0</Descriptions.Item>
                        </Descriptions>
                    </PageHeader>

                    <div style={{ border: "1px solid gray", margin: "0 24px" }}
                        dangerouslySetInnerHTML={{ __html: newsInfo.content }}
                    ></div>
                </div>
            }
        </div>
    )
}
