import React, { useState } from 'react'

export default function App() {

    const [name, setName] = useState("yikai")
    const [age, setAge] = useState(100)

    return (
        <div>
            <button onClick={() => {
                setName("Yikai")
                setAge(18)
            }}>click</button>
            App - {name} - {age}
        </div>
    )
}
