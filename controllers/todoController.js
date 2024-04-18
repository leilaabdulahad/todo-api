const Todo = require('../models/Todo')

//create
exports.createTodo = async (req, res) => {
    try{
        const todo = new Todo(req.body)
        await todo.save()
        res.status(201).send(todo)
    } catch(error){
        res.status(500).send({ message: 'Error creating todo', error: error.toString()})
    }
}

//get all
exports.getTodos = async (req, res) => {
    try{
        const todos = await Todo.find()
        res.send(todos)
    } catch(error){
        res.status(500).send({ message: 'An error occured while fetching the products', error: error.message })
    }
}

//get single product
exports.getTodoById = async (req, res) => {
    try{
        const todoId = req.params.todoId
        const todo = await Todo.findById(todoId)
        if(!todo){
            return res.status(404).send({ message: "Product not found" })
        }
        res.send(todo)
    } catch(error){
        console.error("Error fetching todo:", error)
        res.status(500).send({ message: "Error fetching todo" })
    }
}

//delete
exports.deleteTodo = async (req, res) => {
    try{
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: `Product @{req.params.id} deleted`})
    } catch(error){
        res.status(500).send({ message: "Something went wrong when trying to delete a todo"})
    }
}

//update
exports.updateTodo = async (req, res) => {
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(todo)
    } catch(error){
        res.status(500).send({ message: "Something went wrong when trying to update the todo" })
    }
}