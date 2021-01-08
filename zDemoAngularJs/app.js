var app = angular.module('mainApp', []);
app.controller('people', ['$scope', '$http', function ($scope,$http) {

	$scope.name = null;
	$scope.age = null;
	$scope.address = null;

	$scope.postData = function(name, age, address) {

		var data = {
			name: name,
			age: age,
			address: address
		}

		// $http({
		// 	method: 'POST',
		// 	url: 'https://jsonplaceholder.typidode.com/post'
		//   }).then(function(response) {
		// 	  $scope.persons = response.data.records
		// 	  console.log(response.data.records)
		// 	}, function (response) {
		// 		console.log('Lỗi rồi nè')
		// 	});

		$http.post("https://jsonplaceholder.typicode.com/post", JSON.stringify(data))
			.then(function (response){
				console.log(response);

				if(response.data){

				}
			})
	}
}]);