import { Card, Col, List, PageHeader, Row } from 'antd';
import axios from 'axios'
import _ from 'lodash';
import { useEffect, useState } from 'react'
import { INews } from '../../interface/news/INews';

export default function News() {
    const [list, setList] = useState<[string, INews[]][]>();

    useEffect(() => {
        axios.get("/news?publishState=2&_expand=category").then(res => {
            setList(Object.entries(_.groupBy(res.data, (item: INews) => item.category?.title)));
        })
    }, [])


    return (
        <div style={{ width: "95%", margin: "0 auto" }}>
            <PageHeader
                className="site-page-header"
                title="全球大新聞"
                subTitle="查看新聞"
            />
            <div className="site-card-wrapper">
                <Row gutter={[16, 16]}>
                    {
                        list?.map(item => <Col span={8} key={item[0]}>
                            <Card title={item[0]} bordered={true} hoverable={true}>
                                <List
                                    size="small"
                                    dataSource={item[1]}
                                    pagination={{
                                        pageSize: 3
                                    }}
                                    renderItem={data => <List.Item><a href={`#/detail/${data.id}`}>{data.title}</a></List.Item>}
                                />
                            </Card>
                        </Col>)
                    }
                </Row>
            </div>
        </div>
    )
}
