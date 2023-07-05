// require the library
const mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/todo_list_db');

//aquire the connection (to check if it is succesfully connected)
const db = mongoose.connection;

//error  (eventListener)
db.on('error', console.error.bind('error connecting to db'));


//up and running (event Listner on open)
db.once('open', function(){
    console.log('successfully connected to todo list Data Base')
});