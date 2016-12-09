let	connection = require('../../config/db'),
	 	mongoose = require('mongoose'),
    	Schema = mongoose.Schema;

/**
 * Category Schema - Category of Products
 */

var categorySchema = new Schema({
    name: {type: String, required: true},
});

const Category = connection.model('Category', categorySchema);

module.exports = Category;