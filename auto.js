var http = require('http');
var nokori;
var server = http.createServer(function(req, res) {
  res.write("AA");
  res.end();
}).listen(8080)