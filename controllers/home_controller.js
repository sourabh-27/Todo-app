const Todo = require('../models/todo');

//To render the home page with list of todo's in the database
module.exports.home = function(req, res){
    Todo.find({}, function(err, todos){
        if(err){
            console.log("Error in fetching db");
            return;
        }
        return res.render('home', {
            title: "Home",
            todo_list: todos
        });
    })
};

// import todo schema how? run now 