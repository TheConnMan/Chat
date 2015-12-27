var app = require('express')();
var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var api = require('./routes/api');

io.on('connection', function() {
	console.log('New connection');
});

app.use(express.static('public'));

app.get('/api/username', api.username);

server.listen(3000);
