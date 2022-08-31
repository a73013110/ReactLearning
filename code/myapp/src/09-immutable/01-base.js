import React from 'react'
// 淺複製
var obj1 = {
    name: "yikai"
}
var obj2 = obj1
obj2.name = "vans"
console.log(obj1, obj2)
// 複製：只複製1層
var obj3 = {
    name: "yikai",
    arr: [1, 2, 3]  // 此值只會複製地址
}
var obj4 = { ...obj3 }
obj4.name = "vans"
obj4.arr.splice(1, 1)
console.log(obj3, obj4)
// 複製：json-parse，若有undefined、...等就會出錯
var obj5 = {
    name: "yikai",
    arr: [1, 2, 3],  
    address: undefined  // 此值不會被複製
}
var obj6 = JSON.parse(JSON.stringify(obj5))
obj6.name = "vans"
obj6.arr.splice(1, 1)
console.log(obj5, obj6  )

export default function App() {
    return (
        <div>App</div>
    )
}
