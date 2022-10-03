import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, List, Row } from 'antd'

const { Meta } = Card;

export default function Home() {
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="用戶者最常瀏覽" bordered={true}>
                        <List
                            size="small"
                            dataSource={["111", "111"]}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={true}>
                        Card content
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
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
