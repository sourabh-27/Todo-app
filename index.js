//importing express file
const express = require('express');
const port = 8000;

// Configuring db
const db = require('./config/mongoose');
const Todo = require('./models/todo');

// firing up the express
const app = express();

//Use express router
app.use('/', require('./routes/index'));

// Setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// To use the assets folder
app.use(express.static('assets'));

//Listening to the port
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`The server is up and running on the port: ${port}`);
})

