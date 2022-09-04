function test1(a: string, b: string, c?: number): string {
    var temp = a.substring(0, 1) + b.substring(0, 1)
    console.log(temp)
    return temp
}

var myName: string = test1("aaa", "bbb")
console.log(myName)

interface IFunc {
    (a: string, b: string, c?: number): string
}

var myFun2: IFunc = function test1(a: string, b: string, c?: number): string {
    var temp = a.substring(0, 1) + b.substring(0, 1)
    console.log(temp)
    return temp
}

interface IObj {
    name: string,
    age: number,
    getName: (name: string) => string
}

var obj: IObj = {
    name: "yikai",
    age: 100,
    getName: (name: string) => {
        return name
    }
}

var name: string = obj.getName("aaa")

export default {}