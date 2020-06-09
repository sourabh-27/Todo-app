const Todo = require('../models/todo'); //Fetch the todo as it will not work
const moment = require('moment'); //moment.js because of date, its another module

//Creating the new todo 
module.exports.createTodo = function(req, res){
    var datee = moment(req.body.dateVal).format('ll');
    console.log("Requesting", req.body.categoryVal);
    Todo.create({
        description: req.body.description,
        category: req.body.categoryVal,
        date: datee
    }, function(err, newTodo){
        if(err){
            console.log("Error in creating a new todo ", err);
            return;
        }
        console.log('********', newTodo);
        return res.redirect('back');
    });
};