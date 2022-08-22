import React, { useReducer, useContext } from 'react'

const initialState = {
    a: "11111",
    b: "11111"
}

const reducer = (prevState, action) => {
    let newState = { ...prevState }
    switch (action.type) {
        case "change-a":
            newState.a = action.value
            break;
        case "change-b":
            newState.b = action.value
            break;
        default:
            break;
    }
    return newState
}

const GlobalContext = React.createContext()

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={
            {
                state: state,
                dispatch: dispatch
            }
        }>
            <div>
                <Child1 />
                <Child2 />
                <Child3 />
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {
    const { dispatch } = useContext(GlobalContext)

    return <div style={{ background: "red" }}>
        <button onClick={() => {
            dispatch({
                type: "change-a",
                value: "222222222"
            })
        }}>改變a</button>
        <button onClick={() => {
            dispatch({
                type: "change-b",
                value: "333333333"
            })
        }}>改變b</button>
    </div>
}

function Child2() {
    const { state } = useContext(GlobalContext)

    return <div style={{ background: "yellow" }}>
        Child2 - {state.a}
    </div>
}

function Child3() {
    const { state } = useContext(GlobalContext)

    return <div style={{ background: "cyan" }}>
        Child3 - {state.b}
    </div>
}