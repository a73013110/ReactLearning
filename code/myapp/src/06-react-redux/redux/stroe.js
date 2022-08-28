import { configureStore, combineReducers } from '@reduxjs/toolkit'

//#region Reducer
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
//#endregion

//#region MiddleWare
// import thunkMiddleWare from 'redux-thunk'    // 若Action為異步
import promiseMiddleWare from 'redux-promise'
import loggerMiddleWare from '../redux/middleware/logger'
//#endregion

//#region Enhancer
import monitorReducerEnhancer from '../redux/enhancers/monitorReducer'
//#endregion

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

/**
 * store.subscribe
 * store.dispatch
 * store.getState
 * applyMiddleware(thunkMiddleWare): 若Action為異步，將透過中間件處理
 */
// const store = createStore(reducer, applyMiddleware(thunkMiddleWare, promiseMiddleWare))

/**
 * Docs: https://redux-toolkit.js.org/api/configureStore
 * 預設帶入redux-thunk Middleware
 */
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,   // 不檢查Action回傳資料是否正確序列化
    })
        .concat(loggerMiddleWare)
        .concat(promiseMiddleWare),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: undefined,
    enhancers: (defaultEnhancers) => [monitorReducerEnhancer, ...defaultEnhancers]
})
export default store

/**
 * 手動實作createStore
 * @param {} reducer 
 * @returns 
 */
function createYikaiStore(reducer) {
    var list = []
    var state = reducer(undefined, {})   // 初始值

    function subscribe(callback) {
        list.push(callback)
        var index = list.length - 1
        return () => list.splice(index, 1)  // 回傳unsubscribe方法
    }

    function dispatch(action) {
        state = reducer(state, action)  // 更新State
        for (var i in list) {
            list[i] && list[i]()
        }
    }

    function getState() {
        return state
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}