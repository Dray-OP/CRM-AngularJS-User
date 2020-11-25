var app = angular.module('app', []);
app.controller('loginController', ['$scope', function ($scope) {

	$scope.loginData = {
		userName: "",
		password: ""
	};
	$scope.showHidePassword =  showHidePassword();
	$scope.loginSubmit = function (isValid) {
		if (isValid) {
			if ($scope.loginData.userName == "admin" && $scope.loginData.password == "1") {
				toastr["success"](`Đăng nhập thành công`);

			} else {
				toastr["error"](`tài khoản hoặc mật khẩu không chính xác`);
			}
			// toastr["success"](`Đăng nhập thanh công`)
		}
		// loginService.login($scope.loginData.userName, $scope.loginData.password).then(function (response) {
		//     if (response != null && response.error != undefined) {
		//         notificationService.displayError("Đăng nhập không đúng.");
		//     } else {
		//         var stateService = $injector.get('$state');
		//         stateService.go('home');
		//     }
		// });
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