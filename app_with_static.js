var express = require('express');
var app = express();

app.set('view engine', 'jade');
var herald = require('./herald');

app.use(express.static("static"));

app.get("/", function(req, res){
    res.render('home');
});

app.listen(3000, function(){
    herald();
});

