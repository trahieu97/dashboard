let Product = require('../models/Product');

exports.index = function(req, res, next) {
    // productList = Product.getProductList();
    res.render('index', { title: 'Dashboard'});
};

exports.category = function(req, res, next) {
    // productList = Product.getProductList();
    res.render('products/index', { title: 'Dashboard'});
};