var app = angular.module('meanStackApp', ['ui.router']);

function mainController($scope, $http) {

  $scope.createItem = function() {
    var itemObject = {}; 

    itemObject.todoContent = $scope.todoContent;
    itemObject.phoneNumber = $scope.to;
    $scope.items.push(itemObject);

    $http.post('/routes/todos', itemObject)
      .success(function(data) {
        $scope.nameInput = {}; // clear the form so our user is ready to enter another
        $scope.phoneNumberInput = {}; // clear the form so our user is ready to enter another
        $scope.items = data;
        console.log(data);
      })
      .error(function(data) {
         console.log('Error: ' + data);
      });
  };
}