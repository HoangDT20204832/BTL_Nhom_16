const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController')

router.post('/register', authController.postRegister)

module.exports = router;