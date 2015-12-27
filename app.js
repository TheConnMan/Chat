var app = require('express')();
var express = require('express');
var server = require('http').createServer(app);

var api = require('./routes/api');

app.use(express.static('public'));

app.get('/api/username', api.username);

server.listen(3000);
