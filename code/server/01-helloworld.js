const express = require("express")
const { buildSchema } = require("graphql")
const graphqlHttp = require("express-graphql")
var Schema = buildSchema(`
   type Query{
       hello: String,
       getName: String,
       getAge :Int
   }
`)
//處理器
const root = {
    hello: () => {
        //通過數據庫查
        var str = "hello wolrd1111"

        return str;
    },
    getName: () => {
        return "kerwin"
    },
    getAge: () => {
        return 100
    }
}

var app = express()
app.use("/home", function (req, res) {
    res.send("home data1111")
})
app.use("/list", function (req, res) {
    res.send("list data")
})

app.use("/graphql", graphqlHttp({
    schema: Schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000)

