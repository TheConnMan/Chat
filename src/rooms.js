var moment = require('moment');

var rooms = {};

rooms.send = function(io, socket, message, type) {
	io.to(socket.room).emit('send:message', {
		text: message,
		date: moment().format('HH:mm:ss'),
		type: type,
		user: socket.username
	});
};

rooms.leave = function(io, socket) {
	socket.leave(socket.room);
	rooms.send(io, socket, socket.username + ' left', 'join');
		console.log(socket.username + ' left ' + socket.room);
};

rooms.join = function(io, socket, room) {
	socket.room = room;
	socket.join(socket.room);
	rooms.send(io, socket, socket.username + ' joined', 'join');
	console.log(socket.username + ' joined ' + socket.room);
};

module.exports = rooms;
