import { REHYDRATE } from 'redux-persist'

/**
 * Reducer主要用途：傳入State、參數，回根據條件回傳新State
 * Reducer：純函數(Pure Function) => 定義：
 * (1)對函數外部無副作用(注意參數傳入可能因為傳址方式，導致對外部變數有副作用)
 * (2)同樣的輸入得到指定的輸出(不包含隨機輸出，e.g. Math.random())
 * @param {*} prevState 
 * @param {*} action 
 * @returns 
 */
const CityReducer = (prevState = {
    cityName: "北京"
}, action) => {
    let newState = { ...prevState }
    switch (action.type) {
        case "change-city":
            newState.cityName = action.payload;
            return newState
        case REHYDRATE:
            if (action.payload) {
                var incoming = action.payload.CityReducer;
                if (incoming) return { ...newState, ...incoming };
            }
            return newState;
        default:
            return newState
    }
}

export default CityReducer