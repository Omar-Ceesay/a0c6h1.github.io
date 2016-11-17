var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var flash = require("connect-flash");
var Model = require('./models/models.js');
var User = mongoose.model('Users');

var app = express();

var db = "mongodb://localhost/chat"

mongoose.connect(db, function(err, response){
  if(err){console.log("failed to connect to " + db);}
  else{
    console.log("Connected to " + db);
  }
});

var router = express.Router();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
  secret: 'keyboard cat'
}));

// GET
router.get("/api/users", function(request, response){

  Model.find({}, function(err, chatUsers){
    if(err){
      response.status(404).send(err);
    }
    else{
      response.status(200).send(chatUsers);
      console.log("Users Sent");
    }
  });
});
// POST
router.post('/api/users', function(request, response){
  var model = new Model();
  model.username = request.body.username;
  model.password = request.body.password;
  model.save(function(err, user){
    if(err){response.status(500).send(err)}
    else{
      response.status(200).send(user);
    }
  });
});

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false);
      }
      if (!user.validPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  }
));

router.post('/login',
  passport.authenticate('local', { successRedirect: '/#/',
                                   failureRedirect: '/fail.html',
                                   failureFlash: "Invaild password or username" })
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/#/');
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use('/', router);


app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log("Listening on port 3000");
})
