var express = require('express');
var router = express.Router();
// Require controller modules.
var ProductController = require('../controllers/ProductController');

router.get('/', ProductController.index);
router.get('/add', ProductController.add);
router.post('/add', ProductController.doAdd);
router.get('/edit', ProductController.edit);

module.exports = router;
