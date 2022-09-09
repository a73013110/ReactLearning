import { takeEvery } from 'redux-saga/effects'
import { getList1 } from './saga/saga1'
import { getList2 } from './saga/saga2'

function* watchSaga() {
    yield takeEvery("slice/getList1", getList1)
    yield takeEvery("slice/getList2", getList2)
}

export default watchSaga