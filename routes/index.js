var express = require('express');
var router = express.Router();
var Item = require('../models/item.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./index.html');
  //res.render('index', { title: 'Express' });
});

// Read 
router.get('/getallitems', function(req, res, next) {
  Item.find({}, function(err, items){
    console.log('items in router file is: ', items);
    res.send(items);
  });
});

// Create 
router.put('/getallitems', function(req, res, next) {
  /*
  Item.find({}, function(err, items){
    console.log('items in router file is: ', items);
    res.send(items);
  });
  */
});

router.delete('/getallitems', function(req, res, next) {
  /*
  Item.find({}, function(err, items){
    console.log('items in router file is: ', items);
    res.send(items);
  });
  */
});



module.exports = router;
