var app = require('express')();
var express = require('express');
var server = require('http').createServer(app);

app.use(express.static('public'));

server.listen(3000);
