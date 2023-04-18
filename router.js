const router = require('express').Router();


const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');
const productRoutes = require('./views/productRoutes');


router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);

module.exports = router;