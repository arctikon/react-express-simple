let	connection = require('../../config/db'),
	 	mongoose = require('mongoose'),
    	Schema = mongoose.Schema,
    	autoIncrement = require('mongoose-auto-increment');

/**
 * Product Schema - Products model
 */

var productSchema = new Schema({
	productId: {type: Number},
    name: {type: String, required: true},
    _category: {type: Schema.Types.ObjectId, ref: 'Category'},
    price: {type: Number},
    purchasingPrice: {type: Number},
});

autoIncrement.initialize(connection);
productSchema.plugin(autoIncrement.plugin, { model: 'Product', field: 'productId' });
const Product = connection.model('Product', productSchema);

module.exports = Product;