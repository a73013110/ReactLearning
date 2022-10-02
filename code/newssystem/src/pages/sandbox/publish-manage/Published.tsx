import { Button } from 'antd';
import NewsPublish from '../../../components/publish-manage/NewsPublish';
import usePublish from '../../../components/publish-manage/usePublish';
import { EPublishState } from '../../../enum/news/EPublishState';

export default function Published() {
    const { dataSource, handleSunset } = usePublish(EPublishState.published);

    return (
        <div>
            <NewsPublish dataSource={dataSource} button={(id) => <Button danger onClick={() => handleSunset(id)}>下線</Button>}></NewsPublish>
        </div>
    )
}
