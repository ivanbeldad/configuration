require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const todoController = require('./todos/todoController')

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/todos', todoController)

app.listen(port, () => console.log(`Application listenning on port ${port}`))
