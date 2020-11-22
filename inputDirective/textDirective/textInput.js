app.directive('text', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            text: '='
        },
        templateUrl: 'inputDirective/textDirective/textInput.html',
        controller: function ($scope) {
            $scope.check = true;
            $scope.errorMes = "";  
            $scope.keyUpInput = function () {
                if ($scope.text == undefined || $scope.text == '') {
                    $scope.check = false;
                    $scope.errorMes = "Chưa nhập tài khoản";
                } else {
                    $scope.check = true;  
                }
            }
        }
    }
});