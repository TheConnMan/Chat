var app = require('express')();
var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function() {
	console.log('New connection');
});

app.use(express.static('public'));

app.get('/api/username', function(req, res) {
	res.json({
		ok: true
	});
});

server.listen(3000);
