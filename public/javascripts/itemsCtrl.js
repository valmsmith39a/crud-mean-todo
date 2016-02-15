var app = angular.module('meanStackApp', ['ui.router']);

function mainController($scope, $http) {

  $scope.getAllItems = function() {
    // Call method in the service 
    Items.getAllItems()
    .then(function(res){
      console.log('response is: ', res);
      $scope.itemObj = res.data; 
    });
  };

  $scope.createItem = function() {
    Items.createItem($scope.newItem)
    .then(function(res) {
      console.log('response is: ', res);
      console.log('user object is: ', res.data);
      $scope.itemObj = res.data;
    });
  };
}