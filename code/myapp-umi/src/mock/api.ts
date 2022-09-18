import { defineMock } from 'umi'

export default defineMock({
    "GET /users": { name: "yikai", age: 100 },

    "POST /users/login": (req, res) => {
        console.log(req.body)        
        res.send({
            ok: (req.body.username === "yikai" && req.body.password === "12345" ? 1 : 0)
        })
    }
})