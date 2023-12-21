const express = require('express');
const router = express.Router();

const siteController = require('../controllers/siteController')

router.post('/add-to-cart', siteController.addCart)

module.exports = router;