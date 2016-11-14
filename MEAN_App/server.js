var Model = require('./models/models.js');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var db = "mongodb://localhost/WebsiteMean";

mongoose.connect(db, function(err, response){
  if(err){
    console.log('failed to connect to ' + db);
  }
  else{
    console.log('Connected to ' + db);
  }
});

var router = express.Router();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));
//GET
router.get("/api/users", function(request, response){

  Model.find({}, function(err, users){
    if(err){
      response.status(404).send(err);
    }
    else{
      response.status(200).send(users);
      console.log("Data Sent")
    }
  })
})

router.get("/test", function(request, response){
  return response.send({message:"Test"});
    })

router.post("/api/users", function(request, response){
  var model = new Model();
  model.assignment =  request.body.assignment;
  model.class =  request.body.class;
  model.date =  request.body.date;
  model.save(function(err, user){
    if (err) {
      response.status(500).send(err)
    }else{
      response.status(200).send(user)
    }
  });
});

router.delete('/api/users/:id', function(request, response){
  var id = request.params.id;
  Model.remove({_id: id}, function(err, res){
    if(err){
      response.status(500).send(err);
    }else{
      response.status(200).send({message: 'successfully deleted '+ id});
    }
    })
  })

router.put('/api/users', function(request, response){
  Model.findById(request.body._id, function(err, user){
    if(err){
      response.status(404).send(err);
    }else{
      user.update(request.body, function(err, succ){
        if(err){
          response.send(err)
        }else{
          response.status(200).send({message: 'succ'})
        }
      });
    }
  })
});

app.use('/', router);


app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'))

app.listen(3000, function(){
  console.log("Listening on port 3000");
})
