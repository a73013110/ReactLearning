import React from 'react'
import { createPortal } from 'react-dom'

export default function Dialog(props) {
    return createPortal(
        <div style={{
            width: "100%", height: "100%", left: 0, top: 0
            , position: "fixed", background: "rgba(0,0,0,0.7)"
            , zIndex: "9999999" // 因為被父組件的zIndex相應影響，造成實際上不會是在最上層
            , color: "white"
        }}>Dialog
            <div>loading-正在加載中</div>
            {props.children}
            <button onClick={props.onClose}>close</button>
        </div>
        , document.body)
}
