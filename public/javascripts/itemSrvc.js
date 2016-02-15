'use strict';

var app = angular.module('meanStackApp');

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