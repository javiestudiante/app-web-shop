const express = require('express');
const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');

const router = express.Router();

router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;