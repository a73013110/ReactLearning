function* test() {
    console.log("1111111")
    var input1 = yield "111-輸出";
    console.log("2222222", input1)
    var input2 = yield "222-輸出";
    console.log("3333333", input2)
    var input3 = yield "333-輸出";
    console.log(input3)
}

var yikaiTest = test()

var res1 = yikaiTest.next()
console.log(res1)
var res2 = yikaiTest.next("aaa")
console.log(res2)
var res3 = yikaiTest.next("bbb")
console.log(res3)
var res4 = yikaiTest.next("ccc")
console.log(res4)

// async function A() {
//     var res1 = await fetch()
//     var res2 = await fetch()
//     var res3 = await fetch()
//     console.log(res3)
// }

function *test1() {
    setTimeout(() => {
        console.log("11111111-success")
        yikaiTest1.next()
    }, 1000);
    yield;
    setTimeout(() => {
        console.log("22222222-success")
        yikaiTest1.next()
    }, 1000);
    yield;
    setTimeout(() => {
        console.log("33333333-success")
    }, 1000);
    yield;
}

var yikaiTest1 = test1()
yikaiTest1.next()