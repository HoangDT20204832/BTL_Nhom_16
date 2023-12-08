const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const { authMiddleware,authUserMiddleware } = require('../Middleware/authMiddleware');

router.post('/create-product', productController.createProduct )
// router.put('/update-product/:id', authMiddleware , productController.updateProduct )
router.put('/update-product/:id' , productController.updateProduct )
router.delete('/delete-product/:id',  productController.deleteProduct )
router.get('/get-all-product',  productController.getAllProduct )
router.get('/get-detail-product/:id',productController.getDetailProduct )

module.exports = router