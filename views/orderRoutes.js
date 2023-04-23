const orderController = require('../controllers/orderController');
const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');

router.get('/allorders',verifyToken, orderController.getAllOrdersByUser);
router.post('/createorder',verifyToken, orderController.createOrder);


module.exports = router;