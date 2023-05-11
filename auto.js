var http = require('http');
var nokori = 334;
function Counter(){
  nokori--;
  console.log(nokori);
}
const interval = setInterval(Counter , 1000)
var server = http.createServer(function(req, res) {
  console.log(nokori);
  res.end();
}).listen(8080);