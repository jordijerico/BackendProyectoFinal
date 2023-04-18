const productController = require('../controllers/productController');
const router = require('express').Router();


router.get('/allproducts', productController.getAllProducts);


module.exports = router;