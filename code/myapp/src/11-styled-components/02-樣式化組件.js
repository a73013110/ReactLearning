import React from 'react'
import styled from 'styled-components'

export default function App() {
    const StyledChild = styled(Child)`
        background:yellow;
        color:red;
    `

    return (
        <div>
            <StyledChild></StyledChild>
        </div>
    )
}

function Child(props) {
    return <div className={props.className}>
        Child
    </div>
}
