const express = require('express')
const { createTodo } = require('./types')
const app = express()
const port = 3000

app.use(express.json())

// body{
// title: string
// description: string
// }

app.post("/todo", (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You've sent the wrong inputs"
        })
        return
    }
})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updatePayload.safeParse(updatePayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You've sent the wrong inputs"
        })
        return
    }
})


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})