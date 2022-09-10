import React, { useState } from 'react'

import './App.css'

// import Dialog from './components/Dialog'
import Dialog from './components/PortalDialog'

export default function App() {
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
            <div className="box" onClick={() => {
                console.log("Box身上監聽事件")
            }}>
                <div className="left"></div>
                <div className="right">
                    <button onClick={() => {
                        setIsShow(true)
                    }}>ajax</button>
                    {
                        isShow && <Dialog onClose={() => {
                            setIsShow(false)
                        }}>
                            <div>11111</div>
                            <div>22222</div>
                            <div>33333</div>
                        </Dialog>
                    }
                </div>
            </div>
        </div>
    )
}