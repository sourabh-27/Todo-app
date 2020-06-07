const express = require('express'); //Same instance of express doesn't require to again call it. Saves space

const routes = express.Router();
const homeController = require('../controllers/home_controller'); //fetching the controller

routes.get('/', homeController.home); //Calling the home function
routes.use('/create-todo', require('./create_todo'));

module.exports = routes;

