import React from 'react'
import styled from 'styled-components'

export default function App() {
    const StyledFooter = styled.footer`
        background: yellow;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        ul {
            padding: 0;
            display: flex;
            justify-content: space-evenly;
            list-style: none;
            li {
                flex: 1

                &:hover {
                    background: red;
                }
            }
        }
    `

    return (
        <StyledFooter>
            <ul>
                <li>首頁</li>
                <li>列表</li>
                <li>我的</li>
            </ul>
        </StyledFooter>
    )
}
