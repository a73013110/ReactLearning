import { Descriptions, PageHeader } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { INews } from '../../../interface/news/INews';
import { EAuditStateColor, EAuditStateName } from '../../../enum/news/EAuditState';
import { EPublishStateColor, EPublishStateName } from '../../../enum/news/EPublishState';

interface IParams {
    id: string,
    [key: string]: string
}

export default function NewsPreview() {
    const params = useParams<IParams>();
    const [newsInfo, setNewsInfo] = useState<INews>();

    useEffect(() => {
        axios.get(`/news/${params.id}?_expand=category&_expand=role`).then(res => {
            // console.log(res.data);
            setNewsInfo(res.data);
        })
    }, [params.id])

    return (
        <div>
            {
                newsInfo && <div>
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title={newsInfo.title}
                        subTitle={newsInfo.category?.title}
                    >
                        <Descriptions size="small" column={3}>
                            <Descriptions.Item label="創建者">{newsInfo.author}</Descriptions.Item>
                            <Descriptions.Item label="創建時間">{moment(newsInfo.createTime).format("YYYY/MM/DD HH:mm:ss")}</Descriptions.Item>
                            <Descriptions.Item label="發布時間">{newsInfo.publishState ? moment(newsInfo.publishState).format("YYYY/MM/DD HH:mm:ss") : "-"}</Descriptions.Item>

                            <Descriptions.Item label="區域">{newsInfo.region}</Descriptions.Item>
                            <Descriptions.Item label="審核狀態">
                                <span style={{ color: EAuditStateColor[newsInfo.auditState] }}>
                                    {EAuditStateName[newsInfo.auditState]}
                                </span>
                            </Descriptions.Item>
                            <Descriptions.Item label="發布狀態">
                                <span style={{ color: EPublishStateColor[newsInfo.publishState] }}>
                                    {EPublishStateName[newsInfo.publishState]}
                                </span>
                            </Descriptions.Item>

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
