let utils = require('../commons/utils');
let Product = require('../models/Product');

exports.index = function(req, res, next) {
    // productList = Product.getProductList();
    res.render('product/list', 
    { 
        title : 'Sản phẩm - Thêm mới',
        headerTitle : 'Danh sách',
        breadcrumb : utils.getBreadcrumb(req)
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