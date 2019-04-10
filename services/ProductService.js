const MongoClient = require('mongodb').MongoClient;
require('./config/app');

exports.save = function(product) {
    MongoClient.connect(global.DB_HOST, { useNewUrlParser: true }, function (err, db) {
        if (err) {
          console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
          //HURRAY!! We are connected. :)
          console.log('Connection successfully');
      
          // do some work here with the database.
          var dbo = db.db(global.DB_NAME);
          // Get the documents collection
          var collection = dbo.collection('products');
      
          //Create some users
          var product1 =  {
                  productId: '123456789',
                  productName: 'Sinh tố chanh dây 1 lít',
                  productImage: [
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
                  ],
                  details: [
                  {
                      detailName: 'Xuất xứ kjhsafk sdfhdks',
                      detailValue: 'Cao Bằng, Lạng Sơn, có ttkjfklsd'
                  },
                  {
                      detailName: 'Xuất xứ',
                      detailValue: 'Cao Bằng, Lạng Sơn'
                  },
                  {
                      detailName: 'Xuất xứ',
                      detailValue: 'Cao Bằng, Lạng Sơn'
                  },
                  ],
                  productInputPrice: 120000,
                  productSalePrice: 140000,
                  productSaleOffPrice: 90000,
                  unit: 'Chai',
                  saleOffPercent: 15,
                  quantity: 100
              };
          // Insert some users
          collection.insert([product1], function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
            }
            //Close connection
            db.close();
          });
          //Close connection
          db.close();
        }
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