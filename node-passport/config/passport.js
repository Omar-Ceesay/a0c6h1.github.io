var LocalStrategy = require('passport-local').Strategy;

var User = require('../app/models/user');

module.exports = function(passport){
  passport.serializeUser(function(user, done){
    done(null, user.id);
  })

  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
    process.nextTick(function(){
      User.findOne({'local.username': email}, function(err, user){
        if(err){
          return done(err);
        }else if(user){
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        }else{
          var newUser = new User();
          newUser.local.username = email;
          newUser.local.password = password;

          newUser.save(function(err){
            if(err){
              throw err;
            }else{
              return done(null, newUser);
            }
          })
        }
      })
    });
  }
  ))

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
      process.nextTick(function(){
        User.findOne({ 'local.username': email }, function(err, user){
          if(err){
            return done(err);
          }else if(!user){
            return done(null, false, req.flash('loginMessage', 'No user found'));
          }else if (user.local.password != password) {
            return done(null, false, req.flash('loginMessage', 'Incorrect password'));
          }else{
            return done(null, user);
          }
        })
      })
  }
))
}
