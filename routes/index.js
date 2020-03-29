const express = require('express');
const router = express.Router();

const Product = require('../models/Product');


router.get('/', function (req, res, next) {
 
    // res.status(200).json(product);
    res.render('kfnrkle')
  
});

module.exports = router;
