interface IObj {
    name: string,
    age: number,
    location?: string
    // 其他不重要的屬性
    [propName: string]: any
}

var obj1: IObj = {
    name: "yikai",
    age: 100
}

console.log(obj1.name)
console.log(obj1.age)
console.log(obj1.location)

export default {}