import React, { useState } from 'react'

export default function App() {

    const [count, setCount] = useState(0)
    // useState: 記憶函數，記憶狀態
    var myCount = 0;
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
                myCount++
            }}>click</button>
            {count} - {myCount}
        </div>
    )
}
