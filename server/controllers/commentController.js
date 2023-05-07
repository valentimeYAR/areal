const {Comment} = require('../models/models')

class CommentController{
    async getComments(req,res){
        const postId = req.params.id
        const comments = await Comment.findAll({where:
                {forPost: postId}}
        )
        return res.status(200).json(comments)
    }
    async addComment(req,res){
        const postId = req.params.id
        const {text} = req.body
        const comment = await Comment.create({
            text: text, forPost: postId
        })
        console.log(postId)
        return res.status(200).json(comment)
    }
}

module.exports = new CommentController()