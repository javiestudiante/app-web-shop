const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);

module.exports = router;