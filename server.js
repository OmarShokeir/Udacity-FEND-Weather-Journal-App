// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;
const server = app.listen(port,function listening(){
    console.log("Server running");
    console.log("Port: " + port)
})

// GET route to return the projectData
app.get('/all',function(req,res){
    res.send(projectData);
});

// POST route to push the data to projectData
app.post('/add',function(req,res){
    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        response: req.body.response
    }
    console.log(projectData);
    // res.send(projectData);
});

