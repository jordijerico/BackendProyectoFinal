const router = require('express').Router();


const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');
const productRoutes = require('./views/productRoutes');
const orderRoutes = require('./views/orderRoutes');


router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);
module.exports = router;