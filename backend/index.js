const express = require('express')
const cors = require('cors')
const { createTodo } = require('./types')
const { todo } = require('./db')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

// body{
// title: string
// description: string
// }

app.post("/todo", async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You've sent the wrong inputs"
        })
        return
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos", async (req, res) => {
    try {
        const todos = await todo.find()
        console.log(todos)
        res.json({
            todos: todos
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Something went wrong" })
    }
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updatePayload.safeParse(updatePayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You've sent the wrong inputs"
        })
        return
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})