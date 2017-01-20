var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var dbUrl = 'mongodb://localhost/ReactApp';
//var client = require('twilio')('AC9c5006526a870fb2023c8247cdf5081d', 'b188e46e390578f26e9ba7efb30ad38a');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var MongoStore = require('connect-mongo')(session);

mongoose.connect(dbUrl, function(err, response){
  if(err){
    console.log('failed to connect to ' + dbUrl);
  }
  else{
    console.log('Connected to ' + dbUrl);
  }
});
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true,
         store: new MongoStore({ mongooseConnection: mongoose.connection})}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('view engine', 'ejs');

/*app.get('/chat', function(req, res){
  client.sendMessage({
    to: '+16517560283',
    from: '+16122609628',
    body: "Hey what's up"
  },function(err, data){
    if(!err){
      console.log(err);
      console.log(responseData.from);
      console.log(responseData.body);
    }
  })
})  */

//auth route
var auth = express.Router();
require('./app/routes/auth.js')(auth, passport);
app.use('/auth', auth);


require('./app/routes.js')(app, passport);

app.listen(port);
console.log('Server running on port: ' + port);
