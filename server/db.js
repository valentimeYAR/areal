const {Sequelize} = require('sequelize')

module.exports = new Sequelize('posts', 'postgres', '', {
    dialect: "postgres",
    host: 'localhost',
    port: '5432',
})
