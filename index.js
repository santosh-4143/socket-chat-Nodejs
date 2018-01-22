
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	console.log('chat message', msg);
    io.emit('send clint', msg);
  });
});

http.listen(3500, function(){
  console.log('listening on *:3500');
});
