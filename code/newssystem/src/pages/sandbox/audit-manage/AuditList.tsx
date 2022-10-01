import { Button, notification, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../components/hook/useAuth'
import { EAuditState, EAuditStateColor, EAuditStateName } from '../../../enum/news/EAuditState';
import { EPublishState } from '../../../enum/news/EPublishState';
import { ICategory } from '../../../interface/news/ICategory';
import { INews } from '../../../interface/news/INews';

export default function AuditList() {
    const { userInfo } = useAuth();
    const [dataSource, setDataSource] = useState<INews[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/news?author=${userInfo.username}&auditState_ne=0&publishState_lte=1&_expand=category`).then(res => {
            // console.log(res.data)
            setDataSource(res.data);
        });
    }, [userInfo])

    const columns: ColumnsType<INews> = [
        {
            title: '新聞標題',
            dataIndex: 'title',
            render: (title, item) => {
                return <a href={`#/news-manage/preview/${item.id}`}>{title}</a>
            }
        },
        {
            title: '作者',
            dataIndex: 'author'
        },
        {
            title: '新聞分類',
            dataIndex: 'category',
            render: (category: ICategory) => {
                return category.title
            }
        },
        {
            title: '審核狀態',
            dataIndex: 'auditState',
            render: (auditState: EAuditState) => {
                return <Tag color={EAuditStateColor[auditState]}>{EAuditStateName[auditState]}</Tag>
            }
        },
        {
            title: '操作',
            render: (item: INews) => {
                return <div>
                    {
                        item.auditState === EAuditState.auditing && <Button onClick={() => handleRevert(item)}>撤銷</Button>
                    }
                    {
                        item.auditState === EAuditState.pass && <Button danger onClick={() => handlePublish(item)}>發布</Button>
                    }
                    {
                        item.auditState === EAuditState.reject && <Button type="primary" onClick={() => navigate(`/news-manage/update/${item.id}`)}>更新</Button>
                    }
                </div>
            }
        }
    ];

    const handleRevert = (item: INews) => {
        setDataSource(dataSource.filter(data => data.id !== item.id));
        axios.patch(`/news/${item.id}`, {
            auditState: EAuditState.temp
        }).then(res => {
            notification.info({
                message: "通知",
                description: `您可以到草稿箱中查看您的新聞`,
                placement: "bottomRight",
            });
        })
    }

    const handlePublish = (item: INews) => {
        axios.patch(`/news/${item.id}`, {
            publishState: EPublishState.published
        }).then(res => {
            navigate("/publish-manage/published");
            notification.info({
                message: "通知",
                description: `您可以到【發布管理/已發布】中查看您的新聞`,
                placement: "bottomRight",
            });
        })
    }

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 10 }} rowKey={item => item.id} />
        </div>
    )
}
