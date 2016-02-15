var app = angular.module('meanStackApp', ['ui.router']);

function mainController($scope, $http) {

  $scope.getAllItems = function() {
    
    
    /*;
    // Call method in the service 
    Items.getAllItems()
    .then(function(res){
      console.log('response is: ', res);
      $scope.itemObject = res.data; 
      console.log('task created is: ')
    });
    */
  };

  $scope.createItem = function() {
    console.log('task created is: ', $scope.itemObject);
    debugger;
    /*
    Items.createItem($scope.newItem)
    .then(function(res) {
      console.log('response is: ', res);
      console.log('user object is: ', res.data);
      $scope.itemObj = res.data;
    });
    */
  };
}