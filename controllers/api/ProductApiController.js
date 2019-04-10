let utils = require('../../commons/utils');
let Product = require('../../models/Product');


exports.allList = function(req, res, next) {
    Product.find({}).populate('_productType').populate('_unit').exec(function(err, products) {
        if (err) {
            res.status(500);
            res.json({err: 'Have error'});
        }
        res.status(200);
        res.json(products);
    });
};

exports.new = function(req, res, next) {
    // productList = Product.getProductList();
    res.render('product/action', 
    { 
        title : 'Sản phẩm - Thêm mới',
        type : 'new',
        headerTitle : 'Thêm mới',
        breadcrumb : utils.getBreadcrumb(req)
    });
};


exports.edit = function(req, res, next) {
    // productList = Product.getProductList();
    res.render('product/action', 
    { 
        title : 'Sản phẩm - Chỉnh sửa',
        type : 'edit',
        headerTitle : 'Chỉnh sửa',
        breadcrumb : utils.getBreadcrumb(req)
    });
};