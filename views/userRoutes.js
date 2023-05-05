const userController = require('../controllers/userController');

const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

const router = require('express').Router();

router.get('/allusers', verifyToken, isAdmin, userController.getAllUsers);
router.get('/profile', verifyToken, userController.getProfile);
router.put('/profile/update', verifyToken, userController.updateProfile);
router.delete('/profile/delete/:id', verifyToken, isAdmin, userController.deleteUser);


module.exports = router;