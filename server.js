/**
 * Created with IntelliJ IDEA.
 * User: joeboden
 * Date: 09.12.12
 * Time: 14:11
 * To change this template use File | Settings | File Templates.
 */
var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);