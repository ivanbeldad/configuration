const jsYaml = require('js-yaml')
const fs = require('fs')

const content = fs.readFileSync('./src/config.yml')
const config = jsYaml.load(content)

module.exports = config
