const {Post} = require('../models/models')

class PostModel{
    async getAll(req, res){
        const posts = await Post.findAll()
        return res.json(posts)
    }
    async create(req, res){
        const {title, text} = req.body
        const post = await Post.create({title, text})
        return res.json(post.data)
    }
    async getById(req, res){
        const {id} = req.params
        const article = await Post.findByPk(id)
        return res.json(article)

    }
    async delete(req, res){
        const {id} = req.params
        const post = await Post.findByPk(id)
        const deleteArticle = await post.destroy()
        return res.json(deleteArticle)
    }
    async update(req, res){
        const {id} = req.params
        const {title, text} = req.body
        const post = await Post.findOne({where: {id}})
        post.editedAt = new Date()
        post.title = title
        post.text = text
        await post.save()
        res.json(post)
    }
}

module.exports = new PostModel()