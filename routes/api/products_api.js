var express = require('express');
var router = express.Router();
// Require controller modules.
var ProductApiController = require('../../controllers/api/ProductApiController');

router.get('/get_all', ProductApiController.allList);
router.get('/new', ProductApiController.new);
router.get('/edit', ProductApiController.edit);

module.exports = router;
