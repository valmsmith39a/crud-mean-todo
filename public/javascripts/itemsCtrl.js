//var app = angular.module('meanStackApp', ['ui.router']);
var app = angular.module('meanStackApp', []);

function mainController($scope, $http, Items) {

  Items.getAllItems()
    .then(function(res){
      console.log('response is: ', res);
      //$scope.itemObject = res.data; 
      console.log('task created is: ', res.data);
    });

  $scope.getAllItems = function() {

    // Call method in the service 
    Items.getAllItems()
    .then(function(res){
      console.log('get all items response is: ', res);
      //$scope.itemObject = res.data; 
    });
  };

  $scope.createItem = function() {
    console.log('task created is: ', $scope.newItemObject);
    
    Items.createItem($scope.newItemObject)
    .then(function(res) {
      console.log('response is: ', res);
      console.log('user object is: ', res.data);
      //$scope.itemObj = res.data;
    });
  };
}

app.service('Items', function($http) {
  console.log('items service');

  var newItemObjG = {};

  this.getAllItems = function() {
    console.log('getAllItems() in itemSrvc.js');
    return $http.get('/getallitems');
  };

  this.createItem = function(newItemObj) {
    console.log('createItem() in items Srvc.js');
    console.log('new item is: ', newItemObj);
    return $http.post('/createitem', newItemObj);
  };
});