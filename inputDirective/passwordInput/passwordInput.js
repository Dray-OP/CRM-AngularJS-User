app.directive('password', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            password: '='
        },
        templateUrl: 'inputDirective/passwordInput/passwordInput.html',
        controller: function ($scope) {
            $scope.check = true;
            $scope.errorMes = "";
            $scope.keyUpInput = function () {
                let isPassword = /^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*(),.?:{ }|<>]).{10,}$/;
                // $scope.check = ($scope.phone != '' && ); 
                console.log(isPassword.test($scope.password));
                console.log($scope.password.length)

                if ($scope.password == undefined || $scope.password == '') {
                    $scope.errorMes = "Chưa nhập password";
                    $scope.check = false;
                }
                else if (!isPassword.test($scope.password)) {            
                    $scope.errorMes = "Mật khẩu có ít nhất 8 ký tự, bao gồm chữ cái, số và các kí tự đặc biệt";
                } else {
                    $scope.check = true;
                }
            }
        }
    }
});

// app.directive('password', function () {
//     return {
//         restrict: 'E',
//         replace: true,
//         scope: {
//             password: '='
//         },
//         templateUrl: 'directive/inputDirective/passwordInput/passwordInput.html',
//         controller: function ($scope) {
//             $scope.check = true;
//             $scope.errorMes = "";  
//             $scope.keyUpInput = function () {
//                 // let isPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

//                 if ($scope.password == undefined || $scope.password == "" ) {
//                     $scope.check = false;
//                     $scope.errorMes = "Chưa nhập password";
//                 }
//                 // else if ($scope.check) {
//                 //     $scope.check = (isPassword.test($scope.phone)); 
//                 //     $scope.errorMes = "Chưa nhập adsa password";

//                 // }
//                 else {
//                     $scope.check = true;  
//                 }
//             }
//         }
//     }
// });