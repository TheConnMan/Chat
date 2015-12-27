var app = angular.module('chat', []);

app.controller('Chat', ['$scope', function($scope) {

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
