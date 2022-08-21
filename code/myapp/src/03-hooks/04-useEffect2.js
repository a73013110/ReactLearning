import React, { useEffect, useState } from 'react'

export default function App() {

    const [name, setName] = useState("yikai")

    useEffect(() => {
        setName(name.substring(0, 1).toUpperCase() + name.substring(1))
    }, [name])

    return (
        <div>
            app - {name}

            <button onClick={() => {
                setName("kaikai")
            }}>click</button>
        </div>
    )
}