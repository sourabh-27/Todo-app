const express = require('express');

const routes = express.Router();
const createNewTodoController = require('../controllers/create_new_todo');

routes.post('/', createNewTodoController.create);

module.exports = routes;