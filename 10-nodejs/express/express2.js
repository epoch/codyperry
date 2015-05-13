var app = require('express')();
var http = require('http').Server(app);

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('/public'));


app.get('/', function(request, response) {
  console.log('/');
  response.render('index');
});

app.get('/about', function(req, res) {
  console.log('/about');
  res.send('<h2>about</h2>');
});

app.get('/test', function(req, res) {
  res.sendFile(__dirname + '/test.html');
});


app.listen(8000, function() {
  console.log('listening on port 8000');
});


