import React, { useCallback, useState } from 'react'

export default function App() {

    const [myName, setMyName] = useState("yikai")
    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "cc"])

    const handleChange = useCallback(
        (evt) => {
            setText(evt.target.value)
        }, []
    )


    const handleAdd = useCallback(
        (evt) => {
            setList([...list, text])
            setText("")
        }, [text, list]
    )

    const handleDel = useCallback(
        (index) => {
            let newList = [...list];
            newList.splice(index, 1);
            setList(newList);
        }, [list]
    )

    return (
        <div>
            {myName} - <button onClick={() => {
                setMyName("Yikai")
            }}>change-myName</button>
            
            <input onChange={handleChange} value={text} />

            <button onClick={handleAdd}>add</button>

            <div>
                <ul>
                    {
                        list.map((item, index) =>
                            <li key={item}>{item}
                                <button onClick={() => handleDel(index)}>del</button>
                            </li>
                        )
                    }
                </ul>
            </div>

            {!list.length && <div>暫無待辦事項</div>}
        </div>
    )
}
