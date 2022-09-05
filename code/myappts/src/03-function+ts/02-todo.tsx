import React, { useRef, useState } from 'react'

export default function App() {
    const myText = useRef<HTMLInputElement>(null)
    const [list, setList] = useState<Array<string>>([])

    return (
        <div>
            <input ref={myText} />
            <button onClick={() => {
                console.log((myText.current as HTMLInputElement).value);
                setList([...list, (myText.current as HTMLInputElement).value]);
                (myText.current as HTMLInputElement).value = "";
            }}>click</button>

            <ul>
                {
                    list.map((item, index) => <li key={index}>
                        {item}
                    </li>)
                }
            </ul>
        </div>
    )
}
