import React, { useRef, useState } from 'react'

export default function App() {

    const [count, setCount] = useState(0)
    // useState: 記憶函數，記憶狀態
    var myCount = useRef(0)
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
                myCount.current++
            }}>click</button>
            {count} - {myCount.current}
        </div>
    )
}
