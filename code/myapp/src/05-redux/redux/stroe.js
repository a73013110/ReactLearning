import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'    // 若Action為異步
import reduxPromise from 'redux-promise'

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

/**
 * store.subscribe
 * store.dispatch
 * store.getState
 * applyMiddleware(reduxThunk): 若Action為異步，將透過中間件處理
 */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))
const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))
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