import React from 'react'

export default function Dialog() {
    return (
        <div style={{
            width: "100%", height: "100%", left: 0, top: 0
            , position: "fixed", background: "rgba(0,0,0,0.7)"
            , zIndex: "9999999" // 因為被父組件的zIndex相應影響，造成實際上不會是在最上層
        }}>
            Dialog
        </div>
    )
}
