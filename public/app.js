var app = angular.module('chat', []);

app.controller('Chat', ['$scope', '$http', function($scope, $http) {
	$scope.username = '';

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
