const productController = require('../controllers/productController');
const router = require('express').Router();


router.get('/allproducts', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);

module.exports = router;