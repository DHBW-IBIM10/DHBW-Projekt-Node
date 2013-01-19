var express = require('express')
    , http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(8888);


app.use(express.static(__dirname + '/'));

io.sockets.on('connection', function (socket) {

    // create new form
    socket.on('createForm', function (data) {
        console.log('room:' + data);
        socket.room = data;
         socket.join(data);
    } ) ;

    socket.on('liveform', function (data) {
        console.log(data);
        io.sockets.in(socket.room).emit('liveform', data);
    });
});