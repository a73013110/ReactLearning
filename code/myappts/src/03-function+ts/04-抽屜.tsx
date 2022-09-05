import React, { useState } from 'react'

export default function App() {
    const [isShow, setIsShow] = useState(true)

    return (
        <div>
            App
            <Navbar toggleSidebar={() => {
                setIsShow(!isShow)
            }}></Navbar>
            {isShow && <Sidebar></Sidebar>}
        </div>
    )
}

interface IProps {
    title?: string,
    isShow?: boolean,
    toggleSidebar: () => void
}

function Navbar(props: IProps) {
    return <div>
        Navbar
        <button onClick={() => {
            props.toggleSidebar();
        }}>click</button>
    </div>
}

function Sidebar() {
    return <div>
        Sidebar
    </div>
}