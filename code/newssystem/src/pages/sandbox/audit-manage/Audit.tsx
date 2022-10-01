import { Button, notification, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios'
import { useEffect, useState } from 'react'
import useAuth from '../../../components/hook/useAuth';
import { EAuditState } from '../../../enum/news/EAuditState';
import { EPublishState } from '../../../enum/news/EPublishState';
import { ERole } from '../../../enum/role/ERole';
import { ICategory } from '../../../interface/news/ICategory';
import { INews } from '../../../interface/news/INews';

export default function Audit() {
    const [dataSource, setDataSource] = useState<INews[]>([]);
    const { userInfo } = useAuth();

    useEffect(() => {
        axios.get(`/news?auditState=1&_expand=category`).then(res => {
            // console.log(res);
            const list = res.data as INews[];
            setDataSource(
                // 若是超級管理員，給予全部權限
                userInfo.roleId === ERole.SuperAdmin ? list : [
                    // 自己的權限
                    ...list.filter(x => x.author === userInfo.username),
                    // 因為區域編輯沒有此功能，因此加入此資料不會造成資料重複問題
                    ...list.filter(x => x.region === userInfo.region && x.roleId === ERole.Editor)
                ]);
        })
    }, [userInfo]);

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
            title: '操作',
            render: (item: INews) => {
                return <div>
                    <Button type="primary" onClick={() => handleAudit(item, EAuditState.pass, EPublishState.waiting)}>通過</Button>
                    <Button danger  onClick={() => handleAudit(item, EAuditState.reject, EPublishState.temp)}>駁回</Button>
                </div>
            }
        }
    ];

    const handleAudit = (item: INews, auditState: EAuditState, publishState: EPublishState) => {
        setDataSource(dataSource.filter(data => data.id !== item.id));
        axios.patch(`/news/${item.id}`, {
            auditState,
            publishState
        }).then(res => {
            notification.info({
                message: "通知",
                description: `您可以到【審核管理/審核列表】中查看您新聞的審核狀態`,
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
