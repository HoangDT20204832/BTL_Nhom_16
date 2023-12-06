const express = require('express');
const router = express.Router();

const siteController = require('../controllers/siteController')

router.post('/add-to-cart', siteController.addCart)
router.get('/test', siteController.index)

module.exports = router;