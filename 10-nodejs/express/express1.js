// var express = require('express');
// var app = express();

var app = require('express')();
var http = require('http').Server(app);


app.get('/', function(request, response) {
  console.log('/');
  response.send('<h1>hello express</h1>');
});

app.get('/about', function(req, res) {
  console.log('/about');
  res.send('<h2>about</h2>');
});


app.listen(8000, function() {
  console.log('listening on port 8000');
});


