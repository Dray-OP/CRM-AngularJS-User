var app = angular.module('mainApp', []);
app.controller('people', ['$scope', '$http', function ($scope,$http) {

$http({
	method: 'GET',
	url: 'http://127.0.0.1:5500/zDemoAngularJs/database.json'
  }).then(function(response) {
	  $scope.persons = response.data.records
	  console.log(response.data.records)
	}, function (response) {
		console.log('Lỗi rồi nè')
	});
}]);