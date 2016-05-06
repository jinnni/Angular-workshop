var myApp = angular.module('myApp', ['ngDialog']);
myApp.controller("img_content",function($scope,$http,ngDialog){
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
		$scope.pop_data=function(content){
			ngDialog.open({template:'<div>'+content+'</div>',plain: true});
		}
	}).
	error(function(data, status, headers, config) {
	  alert("file not found");
	});
})
  
