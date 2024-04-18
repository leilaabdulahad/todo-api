const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean, 
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

model.exports = mongoose.model('Todo', TodoSchema)