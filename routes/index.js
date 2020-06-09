const express = require('express'); //Same instance of express doesn't require to again call it. Saves space

const routes = express.Router();
const homeController = require('../controllers/home_controller'); //fetching the controller

//What happens when this is the route, it calls another router if that route is not present.
routes.get('/', homeController.home); //Calling the home function
routes.use('/create-todo', require('./create_todo'));
routes.use('/delete-todo', require('./delete_todo'));

module.exports = routes;

