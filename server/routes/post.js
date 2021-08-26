const express = require('express')
const router = express.Router()
const postController = require('../controllers/PostController')
const verifyToken = require('../middleware/auth')

router.get('/', verifyToken, postController.getPost)
router.post('/', verifyToken, postController.createPost)
router.put('/:id', verifyToken, postController.updatePost)
router.delete('/:id', verifyToken, postController.deletePost)

module.exports = router
