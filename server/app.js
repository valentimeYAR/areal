const express = require('express');
const sequelize = require('./db')
const cors = require('cors')
const models = require('./models/models')
const router = require('./routes/index')


const PORT = process.env.PORT || 3000
const app = express();
app.use(express.json())
app.use(cors())
app.use('/api', router)

const server = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


server();

