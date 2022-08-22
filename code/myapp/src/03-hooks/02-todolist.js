import React, { useState } from 'react'

export default function App() {

    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "cc"])

    return (
        <div>
            <input onChange={(evt) => {
                setText(evt.target.value)
            }} value={text} />

            <button onClick={() => {
                setList([...list, text])
                setText("")
            }}>add</button>

            <div>
                <ul>
                    {
                        list.map((item, index) =>
                            <li key={item}>{item}
                                <button onClick={() => {

                                    let newList = [...list];
                                    newList.splice(index, 1);
                                    setList(newList);

                                }}>del</button>
                            </li>
                        )
                    }
                </ul>
            </div>

            {!list.length && <div>暫無待辦事項</div>}
        </div>
    )
}
