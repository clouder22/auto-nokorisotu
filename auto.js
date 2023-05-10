var http = require('http');
var nokori;
var server = http.createServer(function(req, res) {
  res.write("AA   BB");
  res.end();
}).listen(8080)