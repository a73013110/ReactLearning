import React, { Component } from 'react'

const Tabbar = (props) => {

    function handleClick(index) {
        props.event(index);
    }

    return <div>        
        <ul>
            {
                props.list.map((item, index) =>
                    <li key={item.id}
                        className={props.current === index ? "active" : ""}
                        onClick={() => handleClick(index)}
                    >{item.text}</li>)
            }
        </ul>
    </div>
}

export default Tabbar