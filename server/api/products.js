const express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
    Product = require('../domain/product/product');

router.get('/products', function(req, res, next) {

	Product.find()
	.then(function(products) {
    	res.json(products); 
	})
	.catch(function(err){
	  console.error('error:', err);
	});
});

router.post('/products', function(req, res) {

	Product.create({
        name: req.body.name,
		_category: mongoose.Types.ObjectId(req.body.category_id),
	    price: req.body.price,
	    purchasingPrice: req.body.purchasingPrice,
	}).then(function(product) {
		res.json(product);
    })
    .catch(function(err){
	  console.error('error:', err);
	});

});

router.put('/products', function(req, res) {

	Product.update(
		{_id: mongoose.Types.ObjectId(req.body._id)},
		{
	        name: req.body.name,
			_category: mongoose.Types.ObjectId(req.body.category_id),
		    price: req.body.price,
		    purchasingPrice: req.body.purchasingPrice,
	}).then(function(product) {
		res.json(product);
    })
    .catch(function(err){
	  console.error('error:', err);
	});

});

router.get('/products/:id', function(req, res) {

	Product.findById(req.params.id)
	.then(function(product) {
    	res.json(product); 
	})
	.catch(function(err){
	  console.error('error:', err);
	});

});

router.get('/products/byCategory/:categoryId', function(req, res) {

	Product.find({_category: mongoose.Types.ObjectId(req.params.categoryId)})
	.then(function(product) {
    	res.json(product); 
	})
	.catch(function(err){
	  console.error('error:', err);
	});

});


router.delete('/products/:id', function(req, res) {

	Product.remove({_id: mongoose.Types.ObjectId(req.params.id)})
	.then(function(product) {
    	res.json(product); 
	})
	.catch(function(err){
	  console.error('error:', err);
	});

});

module.exports = router;
