var express = require('express');
var router = express.Router();
// Require controller modules.
var ProductController = require('../controllers/ProductController');

router.get('/', ProductController.list);
router.get('/new', ProductController.new);
router.get('/edit', ProductController.edit);

module.exports = router;
