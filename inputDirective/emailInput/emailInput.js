
app.directive('email', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            email: '='
        },
        templateUrl: 'directive/inputDirective/emailInput/emailInput.html',
        controller: function ($scope) {
            $scope.check = true;
            $scope.errorMes = "";  
            $scope.keyUpInput = function () {
                if ($scope.email == undefined) {
                    $scope.check = false;
                    $scope.errorMes = "Email không đúng định dạng!";
                } else {
                    $scope.check = true;  
                }
            }
        }
    }
});