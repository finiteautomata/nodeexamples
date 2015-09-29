var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get("/", function(req, res){
    res.render('index');
});

app.get(/\/users\/(.*)/, function(req, res){
    res.render('user', {
        name: req.params[0]
    });
});

app.listen(3000, function(){
    console.log("We are up");
});
