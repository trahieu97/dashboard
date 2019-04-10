let utils = require('../commons/utils');
let Product = require('../models/Product');
let ProductType = require('../models/ProductType');
let ProductUnit = require('../models/ProductUnit');

exports.index = function(req, res, next) {
    // productList = Product.getProductList();
    res.render('product/list', 
    { 
        title : 'Sản phẩm - Thêm mới',
        headerTitle : 'Danh sách',
        breadcrumb : utils.getBreadcrumb(req)
    });
};

exports.add = function(req, res, next) {
    // productList = Product.getProductList();
    res.render('product/action', 
    { 
        title : 'Sản phẩm - Thêm mới',
        type : 'new',
        headerTitle : 'Thêm mới',
        breadcrumb : utils.getBreadcrumb(req)
    });
};

exports.doAdd = function(req, res, next) {
    let productType =  new ProductType();
    productType.name = 'Siroup';
    productType.path = 'siroup';
    productType.save((err, result) => {
        if(err) {return res.json({err})}
        productType = result;
    });

    let productUnit = new ProductUnit();
    productUnit.name = 'chai';
    productUnit.minUnit = 1;
    productUnit.save((err, result) => {
        if(err) {return res.json({err})}
        productUnit = result;
    });


    let product = new Product();
    product.name = 'Chanh tươi';
    product.path = 'chanh-tuoi';
    product.image = {
        source: {
            uri: 'https://hieutt30-server-app.herokuapp.com/assets/images/products/chanh.jpg'
        }
    };
    product.images = [
        {
            source: {
                uri: 'https://hieutt30-server-app.herokuapp.com/assets/images/products/sinhtochanhday1l.jpg'
            },
        },
        {
            source: {
                uri: 'https://hieutt30-server-app.herokuapp.com/assets/images/products/sinhtochanhday1l.jpg'
            },
        },
    ];
    product._productType = productType._id;
    product.detail = [
        {
            name: 'Xuất xứ',
            value: 'Thăng Bình'
        },
        {
            name: 'Ngày sản xuất',
            value: '20/01/2019'
        },
        {
            name: 'Ngày hết hạn',
            value: '20/02/2019'
        }
    ];
    product.rattings = [
        {
            rattingNo: 3,
            name: 'Lê Văn Anh',
            content: 'Sản phẩm tạm chấp nhận đc'
        },
        {
            rattingNo: 5,
            name: 'Trần Văn Chê',
            content: 'Giá tốt, sản phẩm ok'
        }
    ];
    product._unit = productUnit._id;
    product.price = 123000;
    product.saleOff = 10;
    product.salePrice = 113000;
    product.save((err, product) => {
        if(err) {return res.json({err})}
        res.status(200);
        res.json(product);
    });

    product = new Product();
    product.price = 11000;
    product.saleOff = 15;
    product.salePrice = 9000;
    product.name = 'Siroup vị chanh dây';
    product.path = 'siroup-vi-chanh-day';

    product.image = {
        source: {
            uri: 'https://hieutt30-server-app.herokuapp.com/assets/images/products/sinhtochanhday1l.jpg'
        }
    };
    product.images = [
        {
            source: {
                uri: 'https://hieutt30-server-app.herokuapp.com/assets/images/products/sinhtochanhday1l.jpg'
            },
        },
        {
            source: {
                uri: 'https://hieutt30-server-app.herokuapp.com/assets/images/products/sinhtochanhday1l.jpg'
            },
        },
    ];
    product._productType = productType._id;
    product.detail = [
        {
            name: 'Xuất xứ',
            value: 'Thăng Bình'
        },
        {
            name: 'Ngày sản xuất',
            value: '20/01/2019'
        },
        {
            name: 'Ngày hết hạn',
            value: '20/02/2019'
        }
    ];
    product.rattings = [
        {
            rattingNo: 3,
            name: 'Lê Văn Anh',
            content: 'Sản phẩm tạm chấp nhận đc'
        },
        {
            rattingNo: 5,
            name: 'Trần Văn Chê',
            content: 'Giá tốt, sản phẩm ok'
        }
    ];
    product._unit = productUnit._id;

    product.save((err, product) => {
        if(err) {return res.json({err})}
        res.status(200);
        res.json(product);
    });



    // Product.findOne({path: req.body.path}, (err, product) => {
    //     if(user == null){
    //         bcrypt.hash(req.body.password, 10, function(err, hash){ //Mã hóa mật khẩu trước khi lưu vào db
    //             if (err) {return next(err);}
    //             const product = new Product(req.body)
    //             product.role = ['customer'] //sau khi register thì role auto là customer
    //             product.password = hash;
    //             product.password_confirm = hash;
    //             user.save((err, result) => {
    //                 if(err) {return res.json({err})}
    //                 res.json({user: result})
    //             })
    //         })
    //     }else{
    //         res.json({err: 'Email has been used'})
    //     }
    // });
    
    // res.render('product/action', 
    // { 
    //     title : 'Sản phẩm - Thêm mới',
    //     type : 'new',
    //     headerTitle : 'Thêm mới',
    //     breadcrumb : utils.getBreadcrumb(req)
    // });
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