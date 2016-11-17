var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var loginSchema = new Schema({
  username: String,
  password: String
});

loginSchema.methods.validPassword = function(pwd){
  return (this.password === pwd);
};

var model = mongoose.model('Users', loginSchema);

module.exports = model;
