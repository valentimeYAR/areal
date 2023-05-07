const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')
commentController = require('../controllers/commentController')

// Comments
router.post('/article/:id/comment/', commentController.addComment) // +
router.get('/article/:id/comments/', commentController.getComments) // +
router.put('/article/:id/comment/:comment/', commentController.updateComment) // +
router.delete('/article/:id/comment/:comment/', commentController.deleteComment) // +

// Articles
router.post('/article', postController.create) // +
router.get('/article/:id', postController.getById) // +
router.get('/articles', postController.getAll) // +
router.put('/article/:id', postController.update) // +
router.delete('/:id', postController.delete) // +



module.exports = router