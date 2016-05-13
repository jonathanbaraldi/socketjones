var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var os = require("os"),
    cpus = os.cpus();


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index-video.html');
});

io.on('connection', function(socket){
  
  socket.on('video', function(json){
    io.emit('video', json);
	  // console.log('chat message', msg);
    
  });

  

});

http.listen(8888, function(){
  console.log('Escutando na porta 8888');
});