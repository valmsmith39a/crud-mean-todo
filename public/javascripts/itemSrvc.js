'use strict';

var app = angular.module('meanStackApp');

app.service('Todos', function($http) {
  console.log('todos service');

  var newTodoObjG = {};

  this.getAllTodos = function() {
    console.log('getAllTodos() in todoSrvc.js');
    return $http.get('/getalltodos');
  };

  this.createATodo = function(newTodoObj) {
    console.log('createATodo() in todosSrvc.js');
    console.log('new todo is: ', newTodoObj);
    return $http.post('/createatidi', newTodoObj);
  };
});