import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ICategory } from '../../interface/news/ICategory';
import { INews } from '../../interface/news/INews'

interface IProps {
    dataSource: INews[],
    button: (id: number) => React.ReactNode
}

export default function NewsPublish(props: IProps) {
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
                return <div>{category.title}</div>
            }
        },
        {
            title: '操作',
            render: (item: INews) => {
                return <div>
                    {props.button(item.id)}
                </div>
            }
        }
    ];

    return (
        <div>
            <Table dataSource={props.dataSource} columns={columns} pagination={{ pageSize: 10 }} rowKey={item => item.id} />
        </div>
    )
}
