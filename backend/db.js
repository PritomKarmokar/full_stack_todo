/*
Todo {
    title: string
    description: string
    completed: boolean
}

*/
const mongoose = require("mongoose");
require("dotenv").config(); // Load .env file

const uri = process.env.MONGO_URI;

mongoose.connect(uri);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}