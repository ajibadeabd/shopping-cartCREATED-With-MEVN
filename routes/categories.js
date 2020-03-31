const express = require('express');
const router = express.Router();

const Category = require('../models/Category');
const Product = require('../models/Product');
const Details = require('../models/Details');

router.get('/', function (req, res, next) {

 let me=parseInt(req.query.page)
    console.log(me)
    Category.find(function (err, categories) {
        if (err) return console.log(err);
        res.status(200).json(categories);
        console.log(categories)
    });
    
});
//display all products in l specific Category
router.get('/:category', function (req, res, next) {
    
    Category.findOne({title: req.params.category}, function (err, category) {
        if (err) return console.log(err);
        
        Product.find({category: category.title}, function(err, products) {
            if(err) return console.log(err);
            res.status(200).json(products);
            console.log(products)
        });
    });
  });
 

module.exports = router;
