const mongoose = require('mongoose');

// Creating the schema that is the skeleton
const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
    },
    date:{
        type: Date,
    }
});

const Todo = mongoose.model('Todo', todoSchema);
console.log("Successfully create the schema");
module.exports = Todo;