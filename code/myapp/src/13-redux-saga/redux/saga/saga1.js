import { take, fork, put, call } from 'redux-saga/effects'

function* watchSaga1() {
    while (true) {
        // take 監聽組件發來的action
        yield take("slice/getList1")
        // fork 同步執行異步處理函數
        yield fork(getList1)
    }
}

function* getList1() {
    let res = yield call(getListActoin1)
    console.log("getList1", res)

    // yield sliceAction.changeList(res)
    yield put({
        type: "slice/changeList1",
        payload: res
    })
}

// 模擬Promise取資料方法
function getListActoin1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["1111", "2222", "3333"])
        }, 2000);
    })
}

export default watchSaga1