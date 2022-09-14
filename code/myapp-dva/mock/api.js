export default {
    "GET /user": { name: "yikai", age: 100, location: "taiwan" },

    "POST /user/login": (req, res) => {
        console.log(req.body)
        if (req.body.username === "user" && req.body.password === "12345") {
            res.send({
                ok: 1
            })
        }
        else {
            res.send({
                ok: 0
            })
        }
    }
}