var app = angular.module("movieApp",[]);

app.controller("movieCtrl", ['$scope', function($scope){

	$scope.images = [{url:'images/image_001.jpg'},
					 {url:'images/image_002.jpg'},
					 {url:'images/image_003.jpg'},
					 {url:'images/image_004.jpg'},
					 {url:'images/image_005.jpg'},
					 {url:'images/image_006.jpg'},
					 {url:'images/image_007.jpg'},
					 {url:'images/image_008.jpg'}
					 ];


}])