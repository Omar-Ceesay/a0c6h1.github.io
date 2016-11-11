var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  assignment: String,
  class: String,
  date: String
});

var model = mongoose.model('Users', UsersSchema);

module.exports = model;
