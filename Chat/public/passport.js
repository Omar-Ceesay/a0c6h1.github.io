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

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
  secret: 'keyboard cat'
}));

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
