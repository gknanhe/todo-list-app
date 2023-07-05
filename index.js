const express = require('express');
const path = require('path');
const port = 8000;


//include mogobd just above express firedup

const db = require('./config/mongoose');

//require model

const Todo = require('./models/todo');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());//parser used in middleware
//meddileware for adding css js files
app.use(express.static('assets'));






app.get('/', async function (req, res) {


    
    try {
        let todoList = await Todo.find({})

        console.log('*****', todoList);
        // return res.redirect('back')
        return res.render('home', {
            title: "My todo list",
            todo_list: todoList
        })


    }
    catch (err) {
        console.log(err);
        return;
    }

})


//Function get data after form submit
app.post('/taskForm', async function (req, res) {

   

    //alternate way

    // console.log(req.body)

    try {

        let date = req.body.date;
        if(date == ''){
            date = 'No Due Date'
        }
        let newContact = await Todo.create(
            {
                task: req.body.task,
                category: req.body.category,
                date: date,
                checked: "",
            }
        )

        return res.redirect('back');


    }
    catch (err) {
        console.log(err);
        return;
    }

    
})


// app.get('/checked-task/', async function (req, res) {

// })

//add data to server
app.post('/add-checked/', async function (req, res) {
    console.log("hiii",req.query);


    let id = req.query.dbId;
    let ischecked = "" ;

    console.log(req.query.check)
    if(req.query.check === 'true'){
        // console.log(' h check');
        ischecked = "checked"
    }
    else if(req.query.check === 'false'){
        // console.log('nhi h check')
        ischecked = ""
    }

    //find the contact in database using id and delete

    try {
        //function will find id and update 
        //
        await Todo.findByIdAndUpdate(id ,{checked: ischecked})

        //redirect to home
        return res.redirect('back');
    }
    catch (err) {
        console.log(err);
        return;
    }


})

//Delete Contact
app.get('/delete-task/', async function (req, res) {
    console.log(req.query);
    //get the  id from url

    let id = req.query.id;

    //find the contact in database using id and delete

    try {
        //function will find id and delete 
        await Todo.findByIdAndDelete(id);

        //redirect to home
        return res.redirect('back');
    }
    catch (err) {
        console.log(err);
        return;
    }


})







app.listen(port, function (err) {
    if (err) {
        console.log('an error has been occured ', err);
        return;
    }

    console.log('Yup! My express server is up on the port ', port);
})