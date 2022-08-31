import React, { useEffect } from 'react'

function NotFound(props) {
    useEffect(() => {
        console.log(props)
    }, [props])

    return (
        <div>404 not found</div>
    )
}

// 自製高階組件
function yikaiconnect(cb, obj) {
    var value = cb()
    // 回傳一個接收組件的function
    return (MyComponent) => {
        // 回傳新的function組件，理論上傳入的props是路由，因為React已更到18版，理論上沒有東西，也不需要
        return (props) => {
            console.log(props)
            // function組件內的return view
            return <div style={{ color: "red" }}>
                <MyComponent {...value} {...props} {...obj} />
            </div>
        }
    }
}

export default yikaiconnect(() => {
    return {
        a: 1,
        b: 2
    }
}, {
    aa() { },
    bb() { }
})(NotFound)