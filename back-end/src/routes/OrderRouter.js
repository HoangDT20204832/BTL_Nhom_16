const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');
const { authMiddleware,authUserMiddleware } = require('../Middleware/authMiddleware');

router.post('/create-order', orderController.createOrder)

module.exports = router