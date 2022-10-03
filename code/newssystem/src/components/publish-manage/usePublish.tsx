import { notification } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { EPublishState } from "../../enum/news/EPublishState";
import { INews } from "../../interface/news/INews";
import { useAppSelector } from "../../redux/hooks";

function usePublish(publishState: EPublishState) {
    const userInfo = useAppSelector(state => state.auth.userInfo);
    const [dataSource, setDataSource] = useState<INews[]>([])
    
    useEffect(() => {
        axios.get(`/news?author=${userInfo.username}&publishState=${publishState}&_expand=category`).then(res => {
            // console.log(res.data);
            setDataSource(res.data);
        })
    }, [userInfo, publishState])

    const handlePublish = (id: number) => {
        // console.log(id);
        setDataSource(dataSource.filter(item => item.id !== id));
        axios.patch(`/news/${id}`, {
            publishState: EPublishState.published,
            publishTime: Date.now()
        }).then(res => {
            notification.info({
                message: "通知",
                description: `您可以到【發布管理/已發布】中查看您的新聞`,
                placement: "bottomRight",
            });
        })
    }

    const handleSunset = (id: number) => {
        // console.log(id);
        setDataSource(dataSource.filter(item => item.id !== id));
        axios.patch(`/news/${id}`, {
            publishState: EPublishState.offline
        }).then(res => {
            notification.info({
                message: "通知",
                description: `您可以到【發布管理/已下線】中查看您的新聞`,
                placement: "bottomRight",
            });
        })        
    }

    const handleDelete = (id: number) => {
        // console.log(id);
        setDataSource(dataSource.filter(item => item.id !== id));        
        axios.delete(`/news/${id}`).then(res => {
            notification.info({
                message: "通知",
                description: `您已經刪除了以下線的新聞`,
                placement: "bottomRight",
            });
        })        
    }

    return {
        dataSource, handlePublish, handleSunset, handleDelete
    }
}

export default usePublish