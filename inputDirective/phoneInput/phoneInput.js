app.directive("phone", function () {

    return {
        restrict: "E",
        replace: true,
        scope: {
            phone: '='
        },
        templateUrl: 'directive/inputDirective/phoneInput/phoneInput.html',
        controller: function ($scope) {
            $scope.check = true;
            $scope.errorMes = "Số điện thoại không hợp lệ!";
            $scope.keyUpInput = function () {
                let isnumber = /^[0-9]*$/;
                console.log($scope.check);  
                $scope.check = ($scope.phone != '' && isnumber.test($scope.phone));  
            }
        }
    }

});