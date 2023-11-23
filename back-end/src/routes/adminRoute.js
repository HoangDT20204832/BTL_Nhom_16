const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.post('/admin/add-product', adminController.addProduct);
router.get('/products', adminController.getAllProduct);
router.get('/product/:id', adminController.findProduct)
router.put('/update/product/:id', adminController.updateProduct)
router.delete('/product/:id', adminController.deleteProduct)

module.exports = router;