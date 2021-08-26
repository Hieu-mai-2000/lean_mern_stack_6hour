var express = require('express')
var router = express.Router()
const authController = require('../controllers/AuthController')
const verifyToken = require('../middleware/auth')

router.post('/', verifyToken, authController.loadUser)
router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router
