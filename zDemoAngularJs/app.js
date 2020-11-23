var app = angular.module('app', []);
app.controller('appController', ['$scope', function ($scope) {

	$scope.appData = {
		username: ""
	};

	$scope.appSubmit = function (isValid) {
		console.log($scope.appData);
		if (isValid) {
		
		}
	}
}]);