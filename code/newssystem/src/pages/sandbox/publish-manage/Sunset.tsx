import { Button } from 'antd';
import NewsPublish from '../../../components/publish-manage/NewsPublish';
import usePublish from '../../../components/publish-manage/usePublish';
import { EPublishState } from '../../../enum/news/EPublishState';

export default function Sunset() {
    const { dataSource, handleDelete } = usePublish(EPublishState.offline);

    return (
        <div>
            <NewsPublish dataSource={dataSource} button={(id) => <Button danger onClick={() => handleDelete(id)}>刪除</Button>}></NewsPublish>
        </div>
    )
}
