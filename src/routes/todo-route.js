const express = require('express');
const route = express.Router();

const {
    getAllTodo,
    getTodoById,
    addTodo,
    updateTodoById,
    deleteTodoById
} = require('../controllers/todo-controller');


route.get('/', getAllTodo)
route.get('/:id', getTodoById)
route.post('/', addTodo)
route.put('/:id', updateTodoById)
route.delete('/:id', deleteTodoById)

module.exports = route;