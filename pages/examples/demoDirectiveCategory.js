var app = angular.module("myApp", []);
 
var ctrl = app.controller("myCtrl", function($scope) {
  $scope.dataSettingUsers =
    [
        {id:'1',    key:'userName', name: 'Tên đăng nhập', value: 'Abc',            type:'text' },
        {id:'2',    key:'name' ,    name: 'Họ tên',        value: 'Nguyễn Văn A',   type:'text' },
        {id:'3',    key:'phone' ,   name: 'Số điện thoại', value: 012345678,        type:'number' },
        {id:'4',    key:'email',    name: 'Email',         value: 'holongnhat@com', type:'email' },
        {id:'5',    key:'address',  name: 'Địa chỉ',       value: '',               type:'text' },
        {id:'6',    key:'birdDay',  name: 'Ngày sinh',     value: '',               type:'date' }
    ];   

    // $scope.dataSettingUsers

    $scope.filterDataSettingUsersHasValue   = $scope.dataSettingUsers.filter(x=>x.value!='');
    
    $scope.filterDataSettingUsersEmptyValue = $scope.dataSettingUsers.filter(x=>x.value=='');

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
    // dùng để filter
    // $scope.filterList = function(item){
    //     return item.value != '' ;
    // }
    // $scope.filterAdd = function(item){
    //     return item.value == '' ;
    // }

    $scope.dataChange = '';
    console.log($scope.dataChange);
    // khi focus thì nhận dữ liệu vào dataChange
    $scope.outFocus = function(item){
        $scope.dataChange = item.value; 
        console.log($scope.dataChange);
    }

    $scope.showHideIconEditDelete = true
        console.log($scope.showHideIconEditDelete)
        
    $scope.cancelAction = function(item){
        $scope.dataChange = '';
        if(!$scope.dataChange == ''){
            item.value = $scope.dataChange; 
        }
    }
    
    // edit language
    $scope.cancelLanguage = function(){
        $scope.dataSettingLanguage.model = $scope.dataSettingLanguage.oldModel;
        console.log($scope.dataSettingLanguage.model)
    }

    // console.log($scope.dataSettingUsers[item.id-1].value)
    // delete user
    $scope.confirmDelete = function(item) {
        $scope.dataSettingUsers[item.id-1].value ='';
        $scope.filterDataSettingUsersHasValue   = $scope.dataSettingUsers.filter(x=>x.value!='');
        $scope.filterDataSettingUsersEmptyValue = $scope.dataSettingUsers.filter(x=>x.value=='');
    }
    $scope.confirmAdd = function(item) {
        $scope.filterDataSettingUsersHasValue   = $scope.dataSettingUsers.filter(x=>x.value!='');
        $scope.filterDataSettingUsersEmptyValue = $scope.dataSettingUsers.filter(x=>x.value=='');
    }

    
});