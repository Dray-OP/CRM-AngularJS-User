var app = angular.module('app', []);
app.controller('profileController', ['$scope', function ($scope) {
	$scope.profileData = {
		name: "",
		gender:"nam",
		birdDay:"",
		cardID:"",
		address:"",
		email: "",
		phoneNumber:""
	};

	$scope.profileSubmit = function (isValid) {
		if (isValid) {
			// console.log($scope.profileData);
			// $scope.check = true;
			// $scope.errorMes = "Số điện thoại không hợp lệ!";
			// let isnumber = /^[0-9]*$/;
            //     console.log($scope.check);  
            //     $scope.check = ($scope.phone != '' && isnumber.test($scope.phone));  
            
            // $scope.keyUpInput = function () {
            //     }
		}
	}
}]);