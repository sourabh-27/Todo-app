const express = require('express');

const route = express.Router();
const deleteTodoController = require('../controllers/delete_todo_controller');

route.get('/', deleteTodoController.delete);

module.exports = route;