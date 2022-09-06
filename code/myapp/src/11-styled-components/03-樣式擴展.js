import React from 'react'
import styled from 'styled-components'

export default function App() {
    const StyledButton = styled.button`
        width:100px;
        height:100px;
        background:yellow;
    `
    const StyledButton2 = styled(StyledButton)`
        background:red;
    `

    const StyledButton3 = styled(StyledButton)`
        background:blue;
    `

    return (
        <div>
            <StyledButton></StyledButton>
            <StyledButton2></StyledButton2>
            <StyledButton3></StyledButton3>
        </div>
    )
}
