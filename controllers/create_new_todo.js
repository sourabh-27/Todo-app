const Todo = require('../models/todo');
module.exports.create = function(req, res){
    console.log(req.body);
    Todo.create({
        description: "Hi" //req.body.description
    }, function(err, newTodo){
        if(err){
            console.log("Error in creating a new todo ", err);
            return;
        }
        console.log('********', newTodo);
        return res.redirect('back');
    });
};