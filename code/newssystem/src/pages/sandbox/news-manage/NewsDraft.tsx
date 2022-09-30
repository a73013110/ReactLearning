import { Button, Table, Tag, Modal } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { INews } from '../../../interface/news/INews';
import useAuth from '../../../components/hook/useAuth';
import { ICategory } from '../../../interface/news/ICategory';

const { confirm } = Modal;

export default function NewsDraft() {
    const [dataSource, setDataSource] = useState<INews[]>([]);
    const { userInfo } = useAuth();

    useEffect(() => {
        axios.get(`/news?auditState=0&author=${userInfo.username}&_expand=category`).then(res => {
            setDataSource(res.data);
        })
    }, [])


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
            dataIndex: 'title'
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

                    <Button shape="circle" icon={<EditOutlined />}></Button>

                    <Button type="primary" shape="circle" icon={<UploadOutlined />}></Button>
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
