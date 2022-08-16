import React from 'react'

export default function Sidebar(props) {

    let { bg, position } = props;

    var obj1 = { left: 0 }
    var obj2 = { right: 0 }
    var obj = { background: bg, width: "200px", position: "fixed" }
    var styleObj = position === "left" ? { ...obj, ...obj1 } : { ...obj, ...obj2 }
    var styleObj2 = {background: bg, width: "200px", position: "fixed", [position]: 0}  // 網友提供的方法!!!可以用[]把變數包起來當作Key!!!
    
    return (
        <div style={styleObj2}>
            <ul>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
                <li>1111111111111</li>
            </ul>
        </div>
    )
}

// Sidebar.defaultProps
// Sidebar.propTypes