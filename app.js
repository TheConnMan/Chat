var app = require('express')();
var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var moment = require('moment');

io.on('connection', function() {
	console.log('New connection');
});

app.use(express.static('public'));

app.get('/api/username', function(req, res) {
	io.sockets.emit('send:message', {
		text: req.query.username + ' joined',
		date: moment().format('HH:mm ss'),
		type: 'join'
	});
	res.json({
		ok: true
	});
});

server.listen(3000);
