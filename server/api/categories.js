const express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Product = require('../domain/product/product'),
    Category = require('../domain/category/category');

router.get('/categories', function(req, res, next) {

	Category.find()
	.then(function(categories) {
    	res.json(categories); 
	})
	.catch(function(err){
	  console.error('error:', err);
	});
});

router.post('/categories', function(req, res) {

	Category.create({
        name: req.body.name
	}).then(function(product) {
		res.json(product);
    })
    .catch(function(err){
	  console.error('error:', err);
	});

});

router.put('/categories', function(req, res) {

	Category.update(
		{_id: mongoose.Types.ObjectId(req.body._id)},
		{
	        name: req.body.name
	}).then(function(category) {
		res.json(category);
    })
    .catch(function(err){
	  console.error('error:', err);
	});

});

router.get('/categories/:id', function(req, res) {

	Category.findById(req.params.id)
	.then(function(category) {
    	res.json(category); 
	})
	.catch(function(err){
	  console.error('error:', err);
	});

});

router.delete('/categories/:id', function(req, res) {

	Product.update({_category: mongoose.Types.ObjectId(req.params.id)}, {$unset: {_category: 1 }}, {multi: true})
	.then(function(product) {
       Category.remove({_id: mongoose.Types.ObjectId(req.params.id)})
		.then(function(category) {
	    	res.json(category); 
		});
	})
	.catch(function(err){
	  console.error('error:', err);
	});

});

module.exports = router;
