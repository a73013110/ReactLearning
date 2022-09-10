import React, { forwardRef, useEffect } from 'react'

export default function App() {
    const myText = React.createRef()

    return (
        <div>
            <button onClick={() => {
                console.log(myText)
                myText.current.focus()
                myText.current.value = ""
            }}>獲取焦點</button>

            <Child ref={myText} />
        </div>
    )
}

const Child = forwardRef((props, ref) => {
    return (
        <div style={{ background: "red" }}>
            <input defaultValue="11111111" ref={ref} />
        </div>
    )
})