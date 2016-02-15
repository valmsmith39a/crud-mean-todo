'use strict';
var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  task:{type:String}
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;