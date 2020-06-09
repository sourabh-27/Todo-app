const Todo = require('../models/todo');

console.log("Inside delete controller");
module.exports.delete = function(req, res){
    let id = JSON.parse(req.query.todo);
    for(let i = 0; i < id.length; i++){
        // console.log(id[i]);
        Todo.findByIdAndDelete(id[i], function(err){
            if(err){
                console.log("Error in deleting the object from database");
                return;
            }
        });
    }

    return res.redirect('back');
};