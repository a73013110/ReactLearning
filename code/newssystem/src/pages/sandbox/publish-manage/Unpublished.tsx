import { Button } from 'antd';
import NewsPublish from '../../../components/publish-manage/NewsPublish';
import usePublish from '../../../components/publish-manage/usePublish';
import { EPublishState } from '../../../enum/news/EPublishState';

export default function Unpublished() {
    const { dataSource, handlePublish } = usePublish(EPublishState.waiting);

    return (
        <div>
            <NewsPublish dataSource={dataSource} button={(id) => <Button type="primary" onClick={() => handlePublish(id)}>發布</Button>}></NewsPublish>
        </div>
    )
}
