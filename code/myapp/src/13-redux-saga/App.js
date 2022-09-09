import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import './01-生成器'
// import './02-可執行生成器'

import { sliceAction } from './redux/slice'

export default function App() {
    const slice = useSelector(state => state.slice)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => {
                if (slice.list1.length === 0) {
                    console.log("Dispatch")
                    dispatch({
                        type: "slice/getList"
                    })
                } else {
                    console.log("緩存", slice.list1)
                }
            }}>Click-ajax-異步緩存</button>
        </div>
    )
}
