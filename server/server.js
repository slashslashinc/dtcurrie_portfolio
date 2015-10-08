/*
 server/server.js
 Devin T. Currie
 */

// Modules
var express = require("express"),
    mongoose = require("mongoose"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    methodOverride = require('method-override'),
    app = express(),
    db = require('./../config/db'),        // Config
    port = process.env.PORT || 3000,    // Port
    path = require('path'),
    publicPath = path.join(__dirname, '../public');

// Configure Modules
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(publicPath));

// Connect to mongoDB
mongoose.connect(db.url);

//// DEBUG: add a test model
//var Test = require('mongoose').model('Test'),
//    test = new Test({name: "Server Initialization Test"});
//test.save(function (err) {
//    if (err) console.log("There was an error creating the test model");
//});
//// END DEBUG

app.listen(port);