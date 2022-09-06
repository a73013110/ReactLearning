import React from 'react'
import styled from 'styled-components'

export default function App() {
    const StyledInput = styled.input`
        outline:none;
        border-radius:10px;
        border-bottom:1px solid red;
    `
    const StyledDiv = styled.div`
        background:${props => props.bg};
        width:100px;
        height:100px
    `

    return (
        <div>
            App
            <StyledInput type="text" placeholder="輸入" />

            <StyledDiv bg="red"></StyledDiv>
        </div>
    )
}
