const orderController = require('../controllers/orderController');
const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

router.get('/allorders',verifyToken, orderController.getAllOrdersByUser);
router.post('/createorder',verifyToken, orderController.createOrder);
router.put('/updateorder/:id',verifyToken, isAdmin, orderController.updateOrder);


module.exports = router;