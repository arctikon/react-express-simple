const mongoose = require('mongoose');

var conString = process.env.MONGO_CONNECTION ? process.env.MONGO_CONNECTION : 'mongodb://localhost/products_db';

mongoose.connect(conString, function() {
	console.log('mongo db connected');
});

mongoose.Promise = Promise;

module.exports = mongoose;