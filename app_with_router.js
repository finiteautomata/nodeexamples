var express = require('express');
var users = require('./routes/users');

var app = express();

app.use('/users', users);

app.listen(3000, function(){
    console.log("App with router on its way, m'lord");
});
