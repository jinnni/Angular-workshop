var myApp = angular.module('myApp', ['ngDialog']);
myApp.controller("img_content",function($scope,$http,$q,ngDialog){
	$http.get('js/data.json').
	success(function(data, status, headers, config) {
	  $scope.tiles = data; 
	  $scope.toggle = true;
	  $scope.input_url;
	  $scope.load_img;
	  $scope.show_img=true;
	  $scope.show_hide_input=false;
		var toggle_content = $scope.tiles;
		$scope.select_image = function(fetch_array) {
			toggle_content = fetch_array;
		}
		$scope.show_single_content = function(match_array) {
			return angular.equals(toggle_content, match_array);
		}
		$scope.pop_data=function(content){
			ngDialog.closeAll();
			ngDialog.open({template:'<div><div tabindex="1"></div>'+content+'</div>',plain: true});
		}
		$scope.show_image=function(image){
			ngDialog.closeAll();
			ngDialog.open({template:'<img class="zoomed" src='+image+'>',plain: true});
		}
		$scope.check_promise=function(new_url){
			  return $http.get(new_url).then(function (response) {return new_url;});
		}
	}).
	error(function(data, status, headers, config) {
	  alert("file not found");
	});
})
  
