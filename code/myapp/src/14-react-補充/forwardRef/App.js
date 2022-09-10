import React, { useEffect } from 'react'

export default function App() {
    let myText = null

    return (
        <div>
            <button onClick={() => {
                console.log(myText)
                myText.current.focus();
                myText.current.value = ""
            }}>獲取焦點</button>

            <Child callback={(el) => {
                myText = el
            }} />
        </div>
    )
}

function Child(props) {
    const myText = React.createRef()

    useEffect(() => {
        props.callback(myText)
    }, [])

    return (
        <div style={{ background: "yellow" }}>
            <input defaultValue="11111111" ref={myText} />
        </div>
    )
}