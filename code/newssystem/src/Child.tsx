import React from 'react'
import style from './Child.module.css'

export default function Child() {
    return (
        <div>
            <ul>
                <li className={style.item}>1111</li>
                <li className={style.item}>2222</li>
            </ul>
        </div>
    )
}
