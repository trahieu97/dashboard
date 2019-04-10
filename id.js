//lets require/import the mongodb native drivers.
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')

dotenv.config()


console.log(process.env.DB_URL)

// Connection URL. This is where your mongodb server is running.

// Use connect method to connect to the Server
MongoClient.connect('mongodb+srv://tratanhieu:hieu26101997@cluster0-kihpn.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection successfully');
    console.log(process.env.DB_NAME)
    var dbo = db.db(process.env.DB_NAME);

    var collection = dbo.collection('products');

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
                detailName: 'Xuất xứ kjhsafuk sdfhdks',
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