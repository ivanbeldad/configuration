const app = require('express')()
const bodyParser = require('body-parser')
const todoController = require('./todos/todoController')

app.use(bodyParser.json())
app.use('/todos', todoController)

app.listen(3000, () => console.log(`Application listenning on port 3000`))
