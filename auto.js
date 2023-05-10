var http = require('http');
var nokori;
var server = http.createServer(function(req, res) {
  res.write();
  res.end();
}).listen(8080)