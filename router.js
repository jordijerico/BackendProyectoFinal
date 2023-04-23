const router = require('express').Router();


const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');
const productRoutes = require('./views/productRoutes');
const orderRoutes = require('./views/orderRoutes');
const orderproductRoutes = require('./views/orderproductRoutes');


router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);
router.use('/orderproduct', orderproductRoutes);
module.exports = router;