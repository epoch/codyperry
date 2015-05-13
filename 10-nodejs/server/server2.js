var http = require('http');

var app = function(request, response) {
  console.log(new Date());

  response.write('codyperry');
  response.end();
}

var server = http.createServer(app);
server.listen(8000);