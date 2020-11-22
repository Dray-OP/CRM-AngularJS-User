app.directive('text', function () {
    return {
        // restrict: 'E',
        replace: true,
        scope: {
            name: '='
        },
        templateUrl: './textInput.html',
        controller: function ($scope) {
            console.log($scope.name)
            // $scope.check = true;
            // $scope.errorMes = "";  
            // $scope.keyUpInput = function () {
            //     if ($scope.name == undefined || $scope.name == '') {
            //         $scope.check = false;
            //         $scope.errorMes = "Chưa nhập tài khoản";
            //     } else {
            //         $scope.check = true;  
            //     }
            // }
        }
    }
});