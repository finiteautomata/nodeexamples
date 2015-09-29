var express = require('express');
var app = express();

app.all(/.*/, function(req, res, next){
    console.log("THIS IS SECRET FUNCTIONALITY!");
    next();
});

app.get("/", function(req, res){
    res.send("This is the root");
});

app.get(/\/users\/(.*)/, function(req, res){
    res.send("User page");
});

var server = app.listen(3000, function(){
    console.log("App up and ready");
});
