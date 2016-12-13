const express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	_ = require('lodash'),
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


router.get('/products/withoutCategory', function(req, res, next) {

	Product.find({ "_category" : { "$exists" : false } })
	.then(function(products) {
    	res.json(products); 
	})
	.catch(function(err){
	  console.error('error:', err);
	});
});

router.post('/products', function(req, res) {

	let newProduct = {name: req.body.name, price: req.body.price, purchasingPrice: req.body.purchasingPrice};

	if(req.body.category_id.match(/^[0-9a-fA-F]{24}$/)){
		newProduct._category = mongoose.Types.ObjectId(req.body.category_id);
	}

	Product.create(newProduct).then(function(product) {
		res.json(product);
    })
    .catch(function(err){
	  console.error('error:', err);
	});

});

router.put('/products', function(req, res) {

	let existProduct = {name: req.body.name, price: req.body.price, purchasingPrice: req.body.purchasingPrice};

	if(req.body.category_id.match(/^[0-9a-fA-F]{24}$/)){
		existProduct._category = mongoose.Types.ObjectId(req.body.category_id);
	}

	Product.update({_id: mongoose.Types.ObjectId(req.body._id)}, existProduct).then(function(product) {
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
