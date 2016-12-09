var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController');
var CommentController = require('../controllers/CommentController');

router.get('/com/:resource', function(req, res, next){
  var resource = req.params.resource;

  if(resource == 'comment'){
    CommentController.find(req.query, function(err, results){
      if(err){
          res.json({
            confirmation: 'fail',
            message: err
          })

          return
      }

      res.json({
        confirmation: 'success',
        results: results
      })
    })
  }
});

router.get('/com/:resource/:id', function(req,res,next){

  var resource = req.params.resource;
  var id = req.params.id;

  if(resource=='comment'){
    CommentController.findById(id, function(err, result){
      if(err){
        res.json({
          confirmation: 'fail',
          message: 'NO COMMENT WITH THAT ID FOUND'
        })
        return
      }
      res.json({
        confirmation: 'success',
        result: result
      })
    })
  }else{
    return null
  }

});

router.post('/com/:resource', function(req, res, next){
  console.log(req);
  var resource = req.params.resource
  if(resource == 'comment'){
    CommentController.create(req.body, function(err, result){
      if(err){
        res.json({
          confirmation: 'fail to create comment',
          message: err
        })
        return
      }
      res.json({
        confirmation:'success',
        message:result
      })
    })
  }else{
    return
  }
})

router.get('/:resource', function(req, res, next){

  var resource = req.params.resource;

  if(resource == 'zone'){
    ZoneController.find(req.query, function(err, results){
      if(err){
          res.json({
            confirmation: 'fail',
            message: err
          })

          return
      }

      res.json({
        confirmation: 'success',
        results: results
      })
    })
  }


})

router.get('/:resource/:id', function(req,res,next){

  var resource = req.params.resource;
  var id = req.params.id;

  if(resource=='zone'){
    ZoneController.findById(id, function(err, result){
      if(err){
        res.json({
          confirmation: 'fail',
          message: 'NOT FOUND'
        })
        return
      }
      res.json({
        confirmation: 'success',
        result: result
      })
    })
  }

})

router.post('/:resource', function(req, res, next){
  //console.log(req);
  var resource = req.params.resource;
  if(resource == 'zone'){
    ZoneController.create(req.body, function(err, result){
      if(err){
        res.json({
          confirmation: 'fail',
          message: err
        })
        return
      }
      res.json({
        confirmation:'success',
        message:result
      })
    })
  }else{
    return null
  }
})

module.exports = router;
