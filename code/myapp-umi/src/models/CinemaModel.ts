import axios from "axios";

export default {
    namespace: "cinema",
    state: {
        list: []
    },
    reducers: {
        changeList(prevState: any, action: any) {
            return {
                ...prevState,
                list: action.payload
            }
        },
        clearList(prevState: any, action: any) {
            return {
                ...prevState,
                list: []
            }
        },
    },
    // 異部作業必須使用effect並套用生成器方法
    effects: {
        *getList(action: any, obj: any): any {
            console.log("getList", obj)
            const { put, call } = obj
            var res = yield call(getListForCinema, action.payload.cityId);
            yield put({
                type: "changeList",
                payload: res
            })
        }
    }
}

async function getListForCinema(cityId: any) {
    // return await axios({
    //     // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
    //     url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
    //     , method: "get"
    // }).then((res: any) => {
    //     console.log(res.data.data.epg)
    //     return res.data.data.epg
    // })
    return await axios({
        // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
        url: `https://m.maizuo.com/gateway?cityId=${cityId}&pageNum=1&pageSize=10&type=1&k=994837`,
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16613345111022180741611521"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    }).then(res => {
        console.log(res.data.data.films)
        return res.data.data.films
    })
}