var app = angular.module('app', []);
app.controller('recoverController', ['$scope', function ($scope) {

	$scope.recoverData = {
        password: "",
        confirmPassword: ""
	};
	$scope.showHidePassword =  showHidePassword();

	$scope.recoverSubmit = function (isValid) {
		console.log($scope.recoverData);
        if($scope.recoverData.password != $scope.recoverData.confirmPassword){
            toastr["error"](`mật khẩu không khớp`);
            return 0;
        }
        if($scope.recoverData.password.length<6 || $scope.recoverData.password.length > 20 ){
            toastr["error"](`Mật khẩu phải dài từ 6 đến 20 kí tự`);
            return 0;
        }
		else {
            toastr["success"](`thay đổi mật khẩu thành công`);
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