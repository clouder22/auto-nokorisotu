var http = require('http');
var nokori = 334;
function Counter(){
  nokori--;
  console.log(nokori);
	if (process.browser) {
    document.write("ZZ");
  }
}
const interval = setInterval(Counter , 1000)
var server = http.createServer(function(req, res) {
  res.write("AAA")
  res.end();
}).listen(8888);