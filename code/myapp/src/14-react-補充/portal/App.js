import React, { useState } from 'react'

import './App.css'

import Dialog from './components/Dialog'

export default function App() {
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
            <div className="box">
                <div className="left"></div>
                <div className="right">
                    <button onClick={() => {
                        setIsShow(true)
                    }}>ajax</button>
                    {
                        isShow && <Dialog></Dialog>
                    }
                </div>
            </div>
        </div>
    )
}