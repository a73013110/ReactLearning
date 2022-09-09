import { take, fork, put, call } from 'redux-saga/effects'

function* watchSaga2() {
    while (true) {
        // take 監聽組件發來的action
        yield take("slice/getList2")
        // fork 同步執行異步處理函數
        yield fork(getList2)
    }
}

function* getList2() {
    let res = yield call(getListActoin2)
    console.log("getList2", res)

    // yield sliceAction.changeList(res)
    yield put({
        type: "slice/changeList2",
        payload: res
    })
}

// 模擬Promise取資料方法
function getListActoin2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["4444", "5555", "6666"])
        }, 2000);
    })
}

export default watchSaga2