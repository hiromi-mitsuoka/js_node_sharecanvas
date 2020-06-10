var express = require('express');
var app = express();//初期化
var server = app.listen(3000);//ポート番号
app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log("new connection: " + socket.id);
  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    console.log(data);
  }
}

console.log('My Server is running...');