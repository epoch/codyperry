var http = require('http');


// signature
var callback = function(response) {
  response.setEncoding('utf-8');

  var total = '';

  response.on('data', function(data) {
    total += data;
  });

  response.on('end', function() {
    console.log(total);

    readFile(filename, function() {
      
    })
  });
}

http.get('http://www.generalassemb.ly', callback);