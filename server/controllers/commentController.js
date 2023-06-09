const {Comment} = require('../models/models')
const {Op} = require('sequelize')

class CommentController {
    async getComments(req, res) {
        const postId = req.params.id
        const comments = await Comment.findAll({
                where:
                    {forPost: postId}
            }
        )
        return res.status(200).json(comments)
    }

    async addComment(req, res) {
        const postId = req.params.id
        const {text} = req.body
        const comment = await Comment.create({
            text: text, forPost: postId
        })
        console.log(postId)
        return res.status(200).json(comment)
    }

    async deleteComment(req, res) {
        const {comment: commentId} = req.params
        const comment = await Comment.findByPk(commentId)
        const deleteComment = await comment.destroy()
        return res.json(deleteComment)
    }

    async updateComment(req, res) {
        const {id, comment: commentId} = req.params
        const {text} = req.body
        const comment = await Comment.findOne({where: {id: commentId, forPost: id}})
        comment.text = text
        comment.editedAt = new Date()
        await comment.save()
        return res.status(200).json(comment)
    }

    async getByDate(req, res) {
        const dateFrom = new Date(req.query.dateFrom)
        const dateTo = new Date(req.query.dateTo)
        let a = await Comment.findAll({
            where: {
                createdAt: {
                    [Op.gte]: dateFrom,
                    [Op.lte]: dateTo
                }
            }
        })
        return res.json(a)
    }
}

module.exports = new CommentController()