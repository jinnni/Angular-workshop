var myApp = angular.module('myApp', []);
myApp.controller("img_content",function($scope,$http){
	$http.get('js/data.json').
	success(function(data, status, headers, config) {
	  $scope.tiles = data; 
	  $scope.toggle = true; 
		var toggle_content = $scope.tiles;
		$scope.select_image = function(fetch_array) {
			toggle_content = fetch_array;
		}
		$scope.show_single_content = function(match_array) {
			return angular.equals(toggle_content, match_array);
		}
	}).
	error(function(data, status, headers, config) {
	  alert("file not found");
	});
})
  
