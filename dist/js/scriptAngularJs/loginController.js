var app = angular.module('app', []);
app.controller('loginController', ['$scope',
    function ($scope) {

        $scope.loginData = {
            userName: "",
            password: ""
        };
       
        //console.log(scope);
        $scope.loginSubmit = function () {
            // loginService.login($scope.loginData.userName, $scope.loginData.password).then(function (response) {
            //     if (response != null && response.error != undefined) {
            //         notificationService.displayError("Đăng nhập không đúng.");
            //     } else {
            //         var stateService = $injector.get('$state');
            //         stateService.go('home');
            //     }
            // });
        }
    }
]);
