//require library to ease our stuff
const mongoose = require('mongoose');

//creat Schema 
/* Schema can be said as the difination or ehat fields should be thre in DB */
//creating Object throught constructor function
const todoScheme = new mongoose.Schema({
    // task: {
    //     type: String,
    //     required: true   //to make it required
    // },

    // category: {
    //     type: String,
    //     required: true
    // },

    // date: {
    //     type: String,
    //     required: true
    // },

    task: String,
    category: String,
    date: String,
    checked: String

});

//creating and assigning schema (Contact  is name of schema & coationntactSchema is defin)
const Todo = mongoose.model('Todo', todoScheme);

//export module
//when in index.js we require it this Contact will be exported
module.exports = Todo;