class Bus {
    public name = "yikai"
    private _list: any = []
    protected age: number = 100
    subscribe(cb: any) {
        this._list.push(cb)
    }

    dispatch() {
        this._list.forEach((cb: any) => {
            cb && cb()
        });
    }
}

class Child extends Bus {
    constructor() {
        super()
        console.log(this.name)
        console.log(this.age)
    }
}

var obj = new Child()

obj.subscribe(() => {

})
// obj._list = []
console.log(obj.name)
// console.log(obj.age)

export default {}