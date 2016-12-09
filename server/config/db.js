const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products_db', function() {
	console.log('mongo db connected');
});

mongoose.Promise = Promise;

module.exports = mongoose;