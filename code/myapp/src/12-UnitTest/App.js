import React, { useState } from 'react'

export default function App() {
    const [list, setList] = useState(["111", "222", "333"])
    const [text, setText] = useState("")

    return (
        <div>
            <h1>yikai-todolist</h1>

            <input value={text} onChange={(evt) => {
                setText(evt.target.value)
            }} />
            <button className="add" onClick={() => {
                if (text) {
                    setList([...list, text])
                    setText("")
                }
            }}>add</button>
            <ul>
                {
                    list.map((item, index) => <li key={index}>
                        {item}
                        <button className="del" onClick={() => {
                            var newList = [...list]
                            newList.splice(index, 1)
                            setList(newList)
                        }}>del</button>
                    </li>)
                }
            </ul>
        </div>
    )
}
