import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* watchSaga() {
    yield takeEvery("get-cinemaList", getCinemaList)
}

function* getCinemaList() {
    let res = yield call(getCinemaListActionPromise)

    yield put({
        type: "change-cinemaList",
        payload: res
    })
}

export function getCinemaListActionPromise() {
    return axios({
        url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
        , method: "get"
    }).then(res => {
        console.log("saga", res.data.data.epg)
        return res.data.data.epg
    })
}

export default watchSaga