const Todo = require('../models/todo');
const moment = require('moment');
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