var mongoose = require('mongoose');

var fileSchema = mongoose.Schema({
	local: {
		filename: String
	}
});

module.exports = mongoose.model('File', fileSchema);
