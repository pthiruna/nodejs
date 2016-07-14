var express = require('express');
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.get('/',function (req, resp){
    console.log("received request from " + req);
    resp.send('Hello World');
});

app.get('/india',function (req, resp){
    console.log("received request from " + req);
    resp.send('Hello India');
});

app.listen(port, function(err){
   console.log("Server is running on port: "+port) 
});