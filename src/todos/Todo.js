const { check } = require('express-validator/check')

class Todo {
  /**
   *
   * @param {Object} opts
   * @param {string} opts.name
   * @param {string} [opts.description]
   * @param {boolean} [opts.done]
   */
  constructor (opts = {}) {
    this.name = opts.name
    this.description = opts.description || ''
    this.done = opts.done || false
  }

  static validation () {
    return [
      check('name')
        .exists()
        .withMessage('Name must exists')
        .not().isEmpty()
        .withMessage('Name must not be empty'),
      check('done')
        .isBoolean()
        .withMessage('Done must be boolean')
        .optional()
    ]
  }
}

module.exports = Todo
