var app = angular.module('app', []);
app.controller('signUpController', ['$scope', function ($scope) {

	$scope.signUpData = {
        userName:"",
        email:"",
        password: "",
        confirmPassword: ""
	};
	$scope.showHidePassword =  showHidePassword();

	$scope.signUpSubmit = function (isValid) {
		console.log($scope.signUpData);
        if($scope.signUpData.password != $scope.signUpData.confirmPassword){
            toastr["error"](`mật khẩu không khớp`);
            return 0;
        }
        if($scope.signUpData.password.length<6 || $scope.signUpData.password.length > 20 ){
            toastr["error"](`Mật khẩu phải dài từ 6 đến 20 kí tự`);
            return 0;
        }
		else {
            toastr["success"](`Đăng ký thành công`);
		}
		
	}
}]);
function showHidePassword() {
    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
}