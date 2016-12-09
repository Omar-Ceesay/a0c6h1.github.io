var mongoose = require('mongoose');

var ZoneSchema = new mongoose.Schema({
  name: {type:String, default:''},
  timestamp: {type:Date, default:Date.now},
  zipCodes: {type:Array, default:[]}
})

module.exports = mongoose.model('ZoneSchema', ZoneSchema);
