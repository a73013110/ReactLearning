import { fromJS } from 'immutable'

/**
 * Reducer主要用途：傳入State、參數，回根據條件回傳新State
 * Reducer：純函數(Pure Function) => 定義：
 * (1)對函數外部無副作用(注意參數傳入可能因為傳址方式，導致對外部變數有副作用)
 * (2)同樣的輸入得到指定的輸出(不包含隨機輸出，e.g. Math.random())
 * @param {*} prevState 
 * @param {*} action 
 * @returns 
 */
const TabbarReducer = (prevState = fromJS({
    show: true
}), action) => {
    // let newState = { ...prevState }
    switch (action.type) {
        case "hide-tabbar":
            return prevState.set("show", false)
        case "show-tabbar":
            return prevState.set("show", true)
        default:
            return prevState
    }
    // return newState
}

export default TabbarReducer