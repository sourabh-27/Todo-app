const express = require('express');

const routes = express.Router();
const createNewTodoController = require('../controllers/create_new_todo');

routes.post('/', createNewTodoController.createTodo);

module.exports = routes;