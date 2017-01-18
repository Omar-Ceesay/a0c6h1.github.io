var User = require('./models/user');
module.exports = function(app, passport){
	app.get('/', mainCheck, function(req, res){
		res.render('index.ejs');
	});

	app.get('/main', isLoggedInIndex, function(req, res){
		res.render('main', { user: req.user });
	});

  app.get('/login', function(req, res){
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: 'login',
    failureFlash: true
  }));

	app.get('/signup', function(req, res){
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});


	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

  app.get('/profile', isLoggedIn, function(req, res){
    res.render('profile.ejs', { user: req.user })
  });

	app.get('/upload', function(req, res){
		var file = new File();
		file.local.filename = req.params.filename;
		file.save(function(err){
			if(err){
				throw err;
			}
		});
		console.log(file.local.filename);
		res.send("File Sent");
	});

	app.post('/upload', function(req, res){
		var file = new File();
		file.local.filename = req.params.filename;
		file.save(function(err){
			if(err){
				throw err;
			}
		});
		console.log(file.local.filename);
		res.send("File Sent");
	});

	app.get('/:username/:password', function(req, res){
		var newUser = new User();
		newUser.local.username = req.params.username;
		newUser.local.password = req.params.password;
		console.log(newUser.local.username + " " + newUser.local.password);
		newUser.save(function(err){
			if(err)
				throw err;
		});
		res.send("Success!");
	})

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }else{
    res.redirect('/login');
  }
}

function isLoggedInIndex(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }else{
    res.redirect('/login');
  }
}

function mainCheck(req, res, next){
  if(req.isAuthenticated()){
    res.redirect('/main');
  }else{
    return next();
  }
}
