angular.module('chat', ['ngRoute', 'btford.socket-io'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: '/partials/username.html'
	})
	.when('/chat', {
		templateUrl: '/partials/chat.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}])
.factory('socket', function(socketFactory) {
	return socketFactory();
})
.controller('Chat', ['$scope', '$http', '$location', 'socket', function($scope, $http, $location, socket) {
	$scope.messages = [];
	$scope.user = {
		username: ''
	};
	$scope.chat = {
		message: ''
	};

	socket.on('send:message', function(message) {
		$scope.messages.push(message);
	});

	$scope.sendUsername = function() {
		if ($scope.user.username.length !== 0) {
			socket.emit('username', $scope.user.username);
			$location.path('/chat');
		}
	};

	$scope.sendMessage = function() {
		if ($scope.chat.message.length !== 0) {
			socket.emit('message', $scope.chat.message);
			$scope.chat.message = '';
			setTimeout(function() {
				$('#message').focus();
			}, 0);
		}
	};

	$scope.differentUser = function(index) {
		return $scope.messages[index].user != $scope.messages[index - 1].user;
	};
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
