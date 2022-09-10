import React, { memo, useState } from 'react'

export default function App() {
    const [name, setName] = useState("yikai")
    const [title, setTitle] = useState("aaaaaa")

    return (
        <div>
            {name}
            <button onClick={() => {
                setName("vans")
            }}>click</button>
            <button onClick={() => {
                setTitle("bbbbbbb")
            }}>clickTitle</button>

            <Child title={title} />
        </div>
    )
}

const Child = memo((props) => {
    console.log("111111111111")
    return <div>
        Child - {props.title}
    </div>
})