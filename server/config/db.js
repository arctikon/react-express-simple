const mongoose = require('mongoose');


//mongodb://localhost/products_db
mongoose.connect('mongodb://arctikon:123gavno@ds145667.mlab.com:45667/heroku_8gf36s7b', function() {
	console.log('mongo db connected');
});

mongoose.Promise = Promise;

module.exports = mongoose;