const express = require('express')
const router =express.Router()

const AuthController = require('../app/controllers/auth/AuthController')

router.post('/signup',AuthController.signUp)
router.post('/login', AuthController.validateUser)
router.get('/sesret', AuthController.userInfo )


module.exports = router