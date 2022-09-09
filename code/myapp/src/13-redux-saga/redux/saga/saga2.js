import { take, fork, put, call, takeEvery } from 'redux-saga/effects'

function* watchSaga2() {
    // while (true) {
    //     // take 監聽組件發來的action
    //     yield take("slice/getList2")
    //     // fork 同步執行異步處理函數
    //     yield fork(getList2)
    // }
    yield takeEvery("slice/getList2", getList2)
}

function* getList2() {
    let res1 = yield call(getListActoin2_1)
    console.log("getList2_1", res1)
    let res2 = yield call(getListActoin2_2, res1)
    console.log("getList2_2", res2)

    // yield sliceAction.changeList(res)
    yield put({
        type: "slice/changeList2",
        payload: res2
    })
}

// 模擬Promise取資料方法
function getListActoin2_1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["4444", "5555", "6666"])
        }, 2000);
    })
}

// 模擬Promise取資料方法
function getListActoin2_2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([...data, "7777", "8888", "9999"])
        }, 2000);
    })
}

export default watchSaga2
export { getList2 }