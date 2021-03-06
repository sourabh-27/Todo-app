//importing express file
const express = require('express');
const port = 8000;

// Configuring db
const db = require('./config/mongoose');
const Todo = require('./models/todo');

// firing up the express
const app = express();

// Setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Query params so that it works we need this line
app.use(express.urlencoded({extended: true}));

// To use the assets folder
app.use(express.static('assets'));

//Use express router
app.use('/', require('./routes/index'));

//Listening to the port
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`The server is up and running on the port: ${port}`);
})

