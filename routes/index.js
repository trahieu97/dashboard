var express = require('express');
var router = express.Router();
// Require controller modules.
var IndexController = require('../controllers/IndexController');

router.get('/', IndexController.index);
router.get('/category', IndexController.category);
router.get('/new', function(req, res, next) {
    res.render('index'), { title : 'Product New' }
});

module.exports = router;
