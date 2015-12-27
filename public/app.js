angular.module('chat', ['btford.socket-io']).
factory('socket', function(socketFactory) {
	return socketFactory();
}).controller('Chat', ['$scope', '$http', 'socket', function($scope, $http, socket) {
	$scope.username = '';
	$scope.messages = [];

	socket.on('send:message', function(message) {
		$scope.messages.push(message);
	});

	$scope.sendUsername = function() {
		if ($scope.username.length !== 0) {
			socket.emit('username', $scope.username);
			$scope.init = true;
			setTimeout(function() {
				$('#message').focus();
			}, 0);
		}
	};

	$scope.sendMessage = function() {
		if ($scope.message.length !== 0) {
			socket.emit('message', $scope.message);
			$scope.message = '';
		}
	};

	$scope.differentUser = function(index) {
		return $scope.messages[index].user != $scope.messages[index - 1].user;
	};

	$('#username').focus();
}]).directive('enter', function() {
	return function($scope, $element, $attrs) {
		$element.bind('keydown keypress', function(e) {
			if (e.which === 13) {
				$scope.$apply(function() {
					$scope.$eval($attrs.enter);
				});
				e.preventDefault();
			}
		});
	};
});
