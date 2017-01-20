var User = require('./models/user');
module.exports = function(app, passport){

	app.get('/', mainCheck, function(req, res){
		res.render('index.ejs');
	});

	function mainCheck(req, res, next){
    if(req.isAuthenticated()){
      res.redirect('/auth/main');
    }else{
      return next();
    }
  }
}
