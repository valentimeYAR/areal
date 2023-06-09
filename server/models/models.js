const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    text: {type: DataTypes.TEXT, nullable: false},
    createdAt: {type: DataTypes.DATE},
    editedAt: {type: DataTypes.DATE, nullable: true},
})

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    text: {type: DataTypes.STRING},
    forPost: {type: DataTypes.INTEGER},
    createdAt: {type: DataTypes.DATE},
    editedAt: {type: DataTypes.DATE, nullable: true},
})

Post.hasMany(Comment, {as: 'comments', foreignKey: 'forPost'})
Comment.belongsTo(Post, {as: 'post', foreignKey: 'forPost'})

module.exports = {
    Post, Comment
}