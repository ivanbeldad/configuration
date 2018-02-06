const router = require('express').Router()
const { validationResult } = require('express-validator/check')
const Todo = require('./Todo')
const todoService = require('./todoService')

router.get('/', async (req, res, next) => {
  try {
    const todos = await todoService.find()
    return res.send(todos)
  } catch (error) {
    return res.status(500).send(error)
  }
})

router.post('/', Todo.validation(), async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(errors.mapped())
  }
  try {
    const todo = new Todo(req.body)
    const isSaved = await todoService.save(todo)
    if (isSaved) {
      return res.send(isSaved)
    } else {
      return res.status(400).send({ msg: 'Error saving object' })
    }
  } catch (error) {
    return res.status(500).send(error)
  }
})

module.exports = router
