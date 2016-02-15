var app = angular.module('meanStackApp', ['ui.router']);

function mainController($scope, $http) {

  // Post a todo object into MongoDB
  // Get a todo object from  MongoDB 
  // ToDo object is a model 
  $scope.getAllItems = function() {
    
    // Call method in the service 
    Items.getAllItems()
    .then(function(res){
      console.log('response is: ', res);
    });

    /*
    $http.get('/routes/todos')
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
         console.log('Error: ' + data);
      });
      */
  };

  $scope.createItem = function() {
    var itemObject = {}; 

    itemObject.todoContent = $scope.todoContent;
    $scope.items.push(itemObject);

    $http.post('/routes/todos', itemObject)
      .success(function(data) {
        $scope.todoContent = {}; // clear the form so our user is ready to enter another
        console.log(data);
      })
      .error(function(data) {
         console.log('Error: ' + data);
      });
  };


}