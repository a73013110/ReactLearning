import { Button, Descriptions, PageHeader } from 'antd';
import React from 'react'
import { useParams } from 'react-router-dom'

export default function NewsPreview() {
    const params = useParams<{ id: string }>();

    return (
        <div>
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Title"
                subTitle="This is a subtitle"
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="創建者">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="創建時間">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="發布時間">Lili Qu</Descriptions.Item>

                    <Descriptions.Item label="區域">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="審核狀態">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="發布狀態">Lili Qu</Descriptions.Item>

                    <Descriptions.Item label="訪問數量">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="點讚數量">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="評論數量">Lili Qu</Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    )
}
