const express = require("express")
const { buildSchema } = require("graphql")
const graphqlHttp = require("express-graphql")

// --------------------------------資料庫連接--------------------------------
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/maizuo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
var FilmModel = mongoose.model("film", new mongoose.Schema({
    name: String,
    poster: String,
    price: Number
}))
// -------------------------------------------------------------------------

var Schema = buildSchema(`

    type Film {
        id: String,
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
        getNowPlaying(id: String!): [Film],
    }

    type Mutation {
        createFilm(input: FilmInput): Film,
        updateFilm(id: String!, input: FilmInput): Film,
        deleteFilm(id: String!): Int
    }
`)

//處理器
const root = {
    /*
    {
        getNowPlayingList {
            id,
            name,
            price
        }
    }
    */
    getNowPlayingList() {
        return FilmModel.find()
    },
    /*
    {
        getNowPlaying(id: "") {
            id,
            name,
            price
        }
    }
    */
    getNowPlaying({ id }) {
        return FilmModel.find({ _id: id })
    },
    /*
    mutation {
        createFilm(input: {
            name: "333",
            poster: "http://333",
            price: 30
        }) {
            id,
            name
        }
    }
    */
    createFilm({ input }) {
        return FilmModel.create({
            ...input
        })
    },
    /*
    mutation {
        updateFilm(id: "631d8d89c32eb2611044b817", input: {
            name: "111-修改"
        }) {
            id,
            name
        }
    }
    */
    updateFilm({ id, input }) {
        return FilmModel.updateOne({
            _id: id
        }, {
            ...input
        }).then(res => FilmModel.findOne({ _id: id }))
    },
    /*
    mutation {
        deleteFilm(id: "631d8ec636ad7c6a30d96827")
    }
    */
    deleteFilm({ id }) {
        return FilmModel.deleteOne({ _id: id }).then(res => 1)
    }
}

var app = express()

app.use("/graphql", graphqlHttp({
    schema: Schema,
    rootValue: root,
    graphiql: true
}))

app.use(express.static("public"))

app.listen(3000)

