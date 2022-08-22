import React, { useState, useRef } from 'react'

export default function App() {

    const [list, setList] = useState(["aa", "bb", "cc"])
    const myText = useRef() // React.CreateRef()

    const handleAdd = () => {
        console.log(myText.current.value)
        
        setList([...list, myText.current.value])

        myText.current.value = ""
    }

    return (
        <div>
            <input ref={myText}/>

            <button onClick={handleAdd}>add</button>

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
