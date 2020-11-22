app.directive("date", function () {
    return {
        restrict: "E",
        scope: {
            date: "="
        },
        templateUrl: 'directive/inputDirective/dateInput/dateInput.html',
        controller: function ($scope) {
            $scope.errorMes = "";
            $scope.check = true;
        
            $scope.keyUpInput = function () {
                

                if ($scope.date == undefined) {
                    $scope.check = false;
                    $scope.errorMes = "Ngày nhập vào không đúng định dạng";
                }
                else {
                    $scope.check = true; 
                }
            }
        }
    }
});