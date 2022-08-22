import React, { useReducer } from 'react'

// 處理函數
const reducer = (prevState, action) => {
    console.log("reducer", prevState, action)
    let newStat = {...prevState}        
    switch(action.type) {
        case "yikai-minus":
            newStat.count--
            return newStat
        case "yikai-add":
            newStat.count++
            return newStat
        default:  
            return prevState
    }
}
// 外部物件
const initialState = {
    count: 0
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "yikai-minus"
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: "yikai-add"
                })
            }}>+</button>
        </div>
    )
}
