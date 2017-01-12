var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  username: {type:String, default:''},
  body: {type:String, default:''},
  timestamp: {type:Date, default:Date.now},
  votes: {type:Number, default:0}
})

module.exports = mongoose.model('CommentSchema', CommentSchema);
