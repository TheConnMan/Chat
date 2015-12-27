var app = require('express')();
var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var rooms = require('./src/rooms');

io.on('connection', function(socket) {
	socket.on('username', function(username) {
		socket.username = username;
	});
	socket.on('message', function(text) {
		rooms.send(io, socket, text, 'message');
	});
	socket.on('change', function(room) {
		if (socket.room) {
			rooms.leave(io, socket);
		}
		rooms.join(io, socket, room);
	});
	socket.on('disconnect', function() {
		if (socket.username) {
			rooms.leave(io, socket);
		}
	});
});

app.use(express.static('public'));

server.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Chat listening at http://%s:%s', host, port);
});
