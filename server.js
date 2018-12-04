HOST = "0.0.0.0";
PORT = process.env.C9_PORT;

var http = require('http');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World\n');
}).listen(PORT, HOST);

console.log('Server running at '+ HOST + ':' + PORT);