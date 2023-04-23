const orderproductController = require('../controllers/orderproductController');
const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');
// const isAdmin = require('../middlewares/isAdmin');

router.get('/allorderproducts/:id', verifyToken, orderproductController.getOrderProductByOrderId);



module.exports = router;