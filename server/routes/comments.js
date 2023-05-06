const Router = require('express')
const router = new Router()

router.post('/article/#ID#/comment/')
router.get('/article/#ID#/comments/')
router.path('/article/#ID#/comment/#COMMENT_ID#/')
router.delete('/article/#ID#/comment/#COMMENT_ID#/')



module.exports = router