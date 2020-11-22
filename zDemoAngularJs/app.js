var app = angular.module('app', []);
app.controller('appController', ['$scope', function ($scope) {

	$scope.appData = {
		name: ""
	};

	$scope.appSubmit = function (isValid) {
		console.log($scope.appData);
		if (isValid) {
		
		}
	}
}]);