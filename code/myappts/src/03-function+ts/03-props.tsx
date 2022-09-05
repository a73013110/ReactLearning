import React from 'react'

export default function App() {
    return (
        <div>
            App
            <Child name="yikai"></Child>
            <Child2 name="vans"></Child2>
        </div>
    )
}

interface IProps {
    name: string
}

function Child(props: IProps) {
    return <div>child - {props.name}</div>
}

const Child2: React.FC<IProps> = (props) => {
    return <div>child - {props.name}</div>
}