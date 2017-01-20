var User = require('./models/user');
module.exports = function(app, passport){

	app.get('/', mainCheck, function(req, res){
		res.render('index.ejs');
	});

	app.get('/room2', function(req, res){
		res.render('room2');
	});

	app.get('/room', function(req, res){
		res.render('room');
	});

	function mainCheck(req, res, next){
    if(req.isAuthenticated()){
      res.redirect('/auth/main');
    }else{
      return next();
    }
  }
}
