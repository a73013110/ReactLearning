const express = require("express")
const { buildSchema } = require("graphql")
const graphqlHttp = require("express-graphql")
var Schema = buildSchema(`

    type Film {
        id: Int,
        name: String,
        poster: String,
        price: Int
    }

    input FilmInput {
        name: String,
        poster: String,
        price: Int
    }

    type Query {
        getNowPlayingList: [Film],
    }

    type Mutation {
        createFilm(input: FilmInput): Film,
        updateFilm(id: Int!, input: FilmInput): Film,
        deleteFilm(id: Int!): Int
    }
`)

var fakeDb = [
    {
        id: 1,
        name: "1111",
        poster: "http://1111",
        price: 100
    },
    {
        id: 2,
        name: "2222",
        poster: "http://2222",
        price: 200
    },
    {
        id: 3,
        name: "3333",
        poster: "http://3333",
        price: 300
    }
]

//處理器
const root = {
    getNowPlayingList() {
        return fakeDb
    },
    /*
    mutation {
        createFilm(input: {
            name: "4444",
            poster: "http://4444",
            price: 400
        }) {
            id,
            name,
            price
        }
    }
     */
    createFilm({ input }) {
        var obj = { ...input, id: fakeDb.length + 1 }
        fakeDb.push(obj)
        return obj
    },
    /*
    mutation {
        updateFilm(id:1, input: {
            name: "yikai",
            poster: "http://4444",
            price: 400
        }) {
            id,
            name,
            price
        }
    }
    */
    updateFilm({ id, input }) {
        var current = null
        fakeDb = fakeDb.map(item => {
            if (item.id === id) {
                current = { ...item, ...input }
                return current
            }
            return item
        })
        return current
    },
    /*
    mutation {
        deleteFilm(id: 1)
    }
    */
    deleteFilm({ id }) {
        fakeDb = fakeDb.filter(item => item.id !== id)
        return 1
    }
}

var app = express()

app.use("/graphql", graphqlHttp({
    schema: Schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000)

