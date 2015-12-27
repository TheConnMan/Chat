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
			$http.get('/api/username?username=' + $scope.username).then(function(data) {
				$scope.init = true;
			});
		}
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
