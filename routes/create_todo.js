const express = require('express');

//creating the router
const routes = express.Router();
const createNewTodoController = require('../controllers/create_new_todo');

//call this function in controller when routed to this location
routes.post('/', createNewTodoController.createTodo);

module.exports = routes;