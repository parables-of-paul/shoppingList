//declare dependencies

var express = require('express');
var app = express();
var summaryController = require('./controllers/summaryController');
var favicon = require('serve-favicon');
var PORT = process.env.PORT;

// set up view engine

app.set('view engine', 'ejs');

// link to static assets

app.use(express.static('./public/'));
app.use(favicon('public/favicon.ico'));

// fire controllers

summaryController(app);

//listen to port

app.listen(PORT || 3000, function(){
});

