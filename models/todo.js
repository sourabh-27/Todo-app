const mongoose = require('mongoose');

// Creating the schema that is the skeleton
const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema);
console.log("Successfully create the schema");

//Exporting the todo so it can be used outside 
module.exports = Todo;