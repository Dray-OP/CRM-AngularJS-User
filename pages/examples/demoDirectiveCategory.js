var app = angular.module("myApp", []);
 
var ctrl = app.controller("myCtrl", function($scope) {
  $scope.dataSettingUser =
    [
        {id:'1',    key:'userName', name: 'Tên đăng nhập',     value: 'Abc'},
        {id:'2',    key:'name' ,    name: 'Họ tên',            value: 'Nguyễn Văn A'},
        {id:'3',    key:'phone' ,   name: 'Số điện thoại',     value: '012345678'},
        {id:'4',    key:'email',    name: 'Email',             value: '@com'}
    ];   
    
    $scope.dataSettingLanguage ={
        //lấy id bằng model
        oldModel:1,
        model:1,
        language : [
            {id:1 , name: 'Vietnamese'},
            {id:2 , name: 'English'},
            {id:3 , name: 'ChaiEn'}
        ]
    };
    $scope.dataChange = '';

    // khi focus thì nhận dữ liệu vào dataChange
    $scope.outFocus = function(item){
        console.log(item);
        $scope.dataChange = item.value; 
    }
    console.log($scope.dataSettingUser);
    $scope.cancelAction = function(item){
        item.value = $scope.dataChange; 
    }
    
    // edit language
    $scope.cancelLanguage = function(){
        $scope.dataSettingLanguage.model = $scope.dataSettingLanguage.oldModel;
        console.log($scope.dataSettingLanguage.model)
    }
});

// Create a Directive named "myTodoList"
// E: Element <my-todo-list todo-list="=" title="@">
// app.directive("listCategoryUsers",function(){
//     return {
//         restrict: "E",
//         replace : true,
//         templateUrl:"./demoListCategory.html",
//         scope: {
//             text:'=',
//             todoList: '=',
//             title: '@'
//         }, 
//         controller: function($scope){
//             $scope.dataUser = 'ffffa';
//             // $scope.changeInput = function(item){
//             //     $scope.dataUser = item.value; 
                
//             // }
//             $scope.outFocus = function(){
//                 // $scope.dataUser = item.value; 
//                 console.log("addd"); 
//             }
//             $scope.cancelAction = function(item){
//                 // item.value = $scope.dataUser; 
//                 // console.log($scope.dataUser);
//                 console.log("addd"); 
//             }
//         }
//     }
// });


    // $scope.submitEdit = function (isValid) {
    //     console.log($scope.dataSettingUser);
    //     $scope.dataSettingUser[0].value = $scope.dataUser;
    //     console.log($scope.dataUser);
    // };