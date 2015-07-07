var fs = require('fs');
var piblaster = require('pi-blaster.js');

var httpServer = require('http').createServer().listen(8000);

var WSServer = require('websocket').server;
var webSocketServer = new WSServer({
  httpServer: httpServer
});

webSocketServer.on('request', function (request) {
  var connection = request.accept(null, request.origin);

  connection.on('message', function(message) {
    var json = JSON.parse(message.utf8Data);
    piblaster.setPwm(json.port, json.brightness / 100);
  });

  connection.on('close', function() {
    console.log('connection closed');
  });
});
