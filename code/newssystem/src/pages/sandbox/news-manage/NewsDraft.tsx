import { Button, Table, Modal, notification } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { INews } from '../../../interface/news/INews';
import { ICategory } from '../../../interface/news/ICategory';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';

const { confirm } = Modal;

export default function NewsDraft() {
    const [dataSource, setDataSource] = useState<INews[]>([]);
    const userInfo = useAppSelector(state => state.auth.userInfo);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/news?auditState=0&author=${userInfo.username}&_expand=category`).then(res => {
            setDataSource(res.data);
        })
    }, [userInfo])


    const columns: ColumnsType<INews> = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (id) => {
                return <b>{id}</b>
            }
        },
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
            title: '分類',
            dataIndex: 'category',
            render: (category: ICategory) => {
                return category.title
            }
        },
        {
            title: '操作',
            render: (item: INews) => {
                return <div>
                    <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => {
                        confirm({
                            title: "你確定要刪除?",
                            icon: <ExclamationCircleOutlined />,
                            onOk() {
                                setDataSource(dataSource.filter(data => data.id !== item.id));
                                axios.delete(`/news/${item.id}`);
                            }
                        });
                    }}></Button>

                    <Button shape="circle" icon={<EditOutlined />} onClick={() => { navigate(`/news-manage/update/${item.id}`); }}></Button>

                    <Button type="primary" shape="circle" icon={<UploadOutlined />} onClick={() => {
                        axios.patch(`/news/${item.id}`, {
                            "auditState": 1
                        }).then(res => {
                            navigate("/audit-manage/list");
                            notification.info({
                                message: "通知",
                                description: `您可以到審核列表中查看您的新聞`,
                                placement: "bottomRight",
                            });
                        })
                    }}></Button>
                </div>
            }
        }
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} rowKey={item => item.id} />
        </div>
    )
}
