import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function App() {
    const myAmimation = keyframes`
        from {
            transform:rotate(0deg)
        }
        to {
            transform:rotate(360deg)
        }
    `
    const StyledDiv = styled.div`
        width:100px;
        height:100px;
        background:yellow;
        animation: ${myAmimation} 1s infinite;
    `

    return (
        <div>
            <StyledDiv />
        </div>
    )
}
