import { createStore } from 'redux'

const reducer = (prevState = {
    show: true
}, action) => {
    console.log("store", action)
    let newStat = {...prevState}
    switch (action.type) {
        case "hide-tabbar":
            newStat.show = false;
            break;
        case "show-tabbar":
            newStat.show = true;
            break;
        default:
            break;
    }
    return newStat
}

/**
 * store.subscribe
 * store.dispatch
 * store.getState
 */
const store = createYikaiStore(reducer)
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
        var index =list.length - 1
        return () => list.splice(index, 1)  // 回傳unsubscribe方法
    }

    function dispatch(action) {
        state = reducer(state, action)  // 更新State
        for(var i in list) {
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