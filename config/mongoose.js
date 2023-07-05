// require the library
// const mongoose = require('mongoose');

// // Connect to database
// mongoose.connect('mongodb://localhost/todo_list_db');

// //aquire the connection (to check if it is succesfully connected)
// const db = mongoose.connection;

// //error  (eventListener)
// db.on('error', console.error.bind('error connecting to db'));


// //up and running (event Listner on open)
// db.once('open', function(){
//     console.log('successfully connected to todo list Data Base')
// });


const mongoose = require('mongoose');
// mongoose.connect('mongodb://0.0.0.0/employeReviewSystem');
const DB = 'mongodb+srv://cse18gknanhejd:0GXWGSTQBXhBNYMz@cluster0.qc7rp6f.mongodb.net/?retryWrites=true&w=majority';

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(DB).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

// db.on('error', console.error.
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});


module.exports = db;
