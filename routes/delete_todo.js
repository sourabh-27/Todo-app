const express = require('express');

const route = express.Router();
const deleteTodoController = require('../controllers/delete_todo_controller');

//call this function in controller when routed to this location
route.get('/', deleteTodoController.delete);

module.exports = route;