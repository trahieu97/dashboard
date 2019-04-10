var express = require('express');
var router = express.Router();
// Require controller modules.
var CategoryController = require('../controllers/CategoryController');

router.get('/', CategoryController.index);
router.get('/new', CategoryController.new);
router.get('/edit', CategoryController.edit);

module.exports = router;
