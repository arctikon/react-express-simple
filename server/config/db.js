const mongoose = require('mongoose');


// mongodb://arctikon:123gavno@ds145667.mlab.com:45667/heroku_8gf36s7b

var conString = process.env.MONGO_CONNECTION ? process.env.MONGO_CONNECTION : 'mongodb://localhost/products_db';

mongoose.connect(conString, function() {
	console.log('mongo db connected');
});

mongoose.Promise = Promise;

module.exports = mongoose;