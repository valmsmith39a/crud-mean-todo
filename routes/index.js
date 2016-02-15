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
router.put('/updateitem', function(req, res, next) {
  /*
  Item.findById(req.params.itemId, function(err, itemObj){
    console.log('items in router file is: ', itemObj);
    res.send(itemObj);
  });
  */
  console.log('inside update in router file, ', req.body)
  console.log('req.body.task is: ', req.body.task);
  console.log('id: ', req.body._id);

  Item.update({_id: req.body._id}, {task: req.body.task}, function(err, data) {
            res.status(err ? 400 : 200).send(err || 'success');
  });
});

router.delete('/removeitem/:itemId', function(req, res, next) {
  console.log('inside delete router file');
  //console.log('req.body to delete is item index', req.params.itemIndex);
  Item.findById(req.params.itemId, function(err, itemObj){
    console.log('items in router file is: ', itemObj);
    itemObj.remove(function(err, item){
      console.log('remove successful')
      res.status(err ? 400:200).send(err||null);
    });
  });
  /*
  Item.find({}, function(err, items){
    console.log('items in router BEFORE file is: ', items);
    items.splice(req.params.itemIndex, 1);
    console.log('items in router AFTER file is: ', items);
    items.save(function(err, item){
      console.log('err in deleting is: ', err);
      res.status(err ? 400 : 200).send(err || item);
    });
  });
  */
});

module.exports = router;
