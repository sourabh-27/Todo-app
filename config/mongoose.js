const mongoose = require('mongoose');

//Connecting to the database
mongoose.connect('mongodb://localhost/todo_lists_db', {useUnifiedTopology: true, useNewUrlParser: true});

//aquiring the connection to check if it is successfull
const db = mongoose.connection;

//Print error if there is any
db.on('error', console.error.bind(console, "Error connecting to the databse"));

//Up and running then print this message
db.once('open', function(){
    console.log("Successfully connected to the database");
})