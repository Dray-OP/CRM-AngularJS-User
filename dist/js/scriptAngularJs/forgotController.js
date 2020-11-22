var app = angular.module('app', []);
app.controller('forgotController', ['$scope', function ($scope) {

	$scope.forgotData = {
		email: ""
	};

	$scope.forgotSubmit = function (isValid) {
		console.log($scope.forgotData);

		if (isValid) {
            toastr["success"](`Email đã được gửi thành công`);
		}
		
	}
}]);