import axios from 'axios'

/**
 * redux-thunk方法
 * @returns 
 */
 export default function getCinemaListAction() {
    return (dispatch) => {
        axios({
            // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            , method: "get"
        }).then(res => {
            console.log(res.data.data.epg)
            dispatch({
                type: "change-list",
                payload: res.data.data.epg
            })
        }).catch(e => {
            console.log(e)
        })
    }
}

/**
 * redux-promise方法
 * @returns 
 */
export function getCinemaListActionPromise() {
    return axios({
        // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
        url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
        , method: "get"
    }).then(res => {
        console.log(res.data.data.epg)
        return {
            type: "change-list",
            payload: res.data.data.epg
        }
    })
}

/**
 * redux-promise async方法
 * @returns 
 */
 export async function getCinemaListActionAsync() {
    return await axios({
        // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
        url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
        , method: "get"
    }).then(res => {
        console.log(res.data.data.epg)
        return {
            type: "change-list",
            payload: res.data.data.epg
        }
    })
}