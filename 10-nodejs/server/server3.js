var http = require('http');
var url = require('url');

var app = function(request, response) {

  console.log(new Date());

  var path = url.parse(request.url).pathname

  switch(path) {

    case '/':
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write('hello world');
      break;
    default:
      response.writeHead(404);
      response.write('404 - opps');
      break;
  }
}

var server = http.createServer(app);
server.listen(8000);