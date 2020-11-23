var app = angular.module('app', []);
app.controller('recoverController', ['$scope', function ($scope) {

	$scope.recoverData = {
        password: "",
        confirmPassword: ""
	};

	$scope.recoverSubmit = function (isValid) {
		console.log($scope.recoverData);
        if($scope.recoverData.password !== $scope.recoverData.confirmPassword){
                toastr["error"](`mật khẩu không khớp`);
                return 0;
        }
        if($scope.recoverData.password.length<6){
            toastr["error"](`dai hon 6`);
            return 0;


        }
		if (isValid) {
            toastr["success"](`thay đổi mật khẩu thành công`);
		}
		
	}
}]);