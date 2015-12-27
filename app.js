var app = require('express')();
var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var moment = require('moment');

io.on('connection', function() {
	console.log('New connection');
});

io.on('connection', function(socket) {
	socket.on('username', function(username) {
		socket.username = username;
		io.sockets.emit('send:message', {
			text: username + ' joined',
			date: moment().format('HH:mm ss'),
			type: 'join'
		});
	});
	socket.on('disconnect', function() {
		if (socket.username) {
			io.sockets.emit('send:message', {
				text: socket.username + ' left',
				date: moment().format('HH:mm ss'),
				type: 'join'
			});
		}
	});
});

app.use(express.static('public'));

server.listen(3000);
