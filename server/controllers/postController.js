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

    }
    async delete(req, res){
        const {id} = req.params
        const post = await Post.findByPk(id)
        const deleteArticle = await post.destroy()
        return res.json(deleteArticle)
    }
    async update(req, res){

    }
}

module.exports = new PostModel()