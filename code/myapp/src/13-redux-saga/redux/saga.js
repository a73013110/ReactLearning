import { take, fork, put, call } from 'redux-saga/effects'

import { sliceAction } from './slice'

function *watchSaga() {
    while (true) {
        // take 監聽組件發來的action
        yield take("slice/getList")
        // fork 同步執行異步處理函數
        yield fork(getList)
    }
}

function *getList() {
    let res = yield call(getListActoin)
    console.log(res)
    
    // yield sliceAction.changeList(res)
    yield put({        
        type: "slice/changeList",
        payload: res
    })
}

// 模擬Promise取資料方法
function getListActoin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["1111", "2222", "3333"])
        }, 2000);
    })
}

export default watchSaga