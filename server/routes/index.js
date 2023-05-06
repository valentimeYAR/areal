const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')

// Comments
router.post('/article/#ID#/comment/')
router.get('/article/#ID#/comments/')
router.path('/article/#ID#/comment/#COMMENT_ID#/')
router.delete('/article/#ID#/comment/#COMMENT_ID#/')

// Articles
router.post('/article', postController.create)
router.get('/#ID#', postController.getById)
router.get('/articles', postController.getAll)
router.path('/#ID#', postController.update)
router.delete('/:id', postController.delete)



module.exports = router