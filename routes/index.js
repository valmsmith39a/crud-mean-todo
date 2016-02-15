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

router.post('/createitem', function(req, res) {
  console.log('inside create item in router file');
  console.log('new item object is', req.body);
  Item.create(req.body, function(err, item){
    console.log('item created is: ', item);
    res.status(err ? 400 : 200).send(err || item);
  });
});

// Create 
router.put('/updateitem/:itemId', function(req, res, next) {
  Item.findById(req.params.itemId, function(err, itemObj){
    console.log('items in router file is: ', itemObj);
    res.send(itemObj);
  });
});

router.delete('/removeitem/:itemId', function(req, res, next) {
  console.log('inside delete router file');
  console.log('req.body to delete is', req.params.itemId);
  Item.findById(req.params.itemId, function(err, itemObj){
    console.log('items in router file is: ', itemObj);
    res.send(itemObj);
  });
});

module.exports = router;
