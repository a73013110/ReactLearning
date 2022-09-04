interface IFunc {
    getName: () => string
    getAge: () => number
}

class A implements IFunc {
    a1() {

    }

    a2() {

    }

    getName() {
        return "AAA"
    }

    getAge = () => 100;
}

class B implements IFunc {
    b1() {

    }

    b2() {

    }

    getName() {
        return "BBB"
    }

    getAge = () => 100;

}

class C implements IFunc {
    getName = () => "CCC"
    getAge = () => 100;
}

function init(obj: IFunc) {
    obj.getName()
    obj.getAge()
}

var objA = new A()
var objB = new B()
var objC = new C()

init(objA)
init(objB)
init(objC)

export default {}