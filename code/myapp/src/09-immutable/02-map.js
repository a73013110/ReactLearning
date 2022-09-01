import React, { useState } from 'react'

import { Map } from 'immutable'

var obj = {
    name: "yikai",
    age: 100
}

var oldImmuObj = Map(obj)
var newImmuObj = oldImmuObj.set("name", "vans")
console.log(oldImmuObj, newImmuObj)
console.log(oldImmuObj.get("name"), newImmuObj.get("name"))
console.log(oldImmuObj.toJS(), newImmuObj.toJS())

export default function App() {
    const [info, setInfo] = useState(Map({
        name: "yikai",
        age: 100
    }))

    const [info2, setInfo2] = useState({
        name: "yikai",
        age: 100
    })

    return (
        <div>
            <button onClick={() => {
                setInfo(info.set("name", "vans").set("age", 18))
            }}>click</button>
            {info.get("name")} -- {info.get("age")}
            <br />
            <button onClick={() => {
                setInfo2(Map(info2).set("name", "vans").set("age", 18).toJS())
            }}>click</button>
            {info2.name} -- {info2.age}
        </div>
    )
}
