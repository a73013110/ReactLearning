import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
// import watchSaga from './saga'
import watchSaga from './saga-every'
import reducer from './slice'

const reducers = combineReducers({
    slice: reducer
})

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(sagaMiddleware)
})

sagaMiddleware.run(watchSaga)    // saga任務

export default store