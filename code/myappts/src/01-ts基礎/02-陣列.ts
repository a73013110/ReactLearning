var list1: string[] = ["1", "2", "3"]

for (let i = 0; i < list1.length; i++) {
    const element = list1[i];
    element.substring(0, 1)
}

var list2: number[] = [1, 2, 3]
list2.push(4)

var list3: (number | string)[] = [1, 2, "aa", "bbb"]
list3.push(3)
list3.push("cccc")

var myList1: Array<string> = ["1", "2", "3"]
myList1.push("4")

var myList2: Array<number | string> = [1, 2, "aa", "bbb"]
myList2.push(3)
myList2.push("cccc")

export default {}
