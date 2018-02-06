const MongoClient = require('mongodb').MongoClient
const config = require('../config')

const db = async () => {
  const client = await MongoClient.connect(config.db.uri)
  return client.db(config.db.dbName).collection('todos')
}

const todoService = {
  save: async (todo) => {
    const collection = await db()
    const result = await collection.save(todo)
    return result.result['ok'] === 1
  },
  find: async () => {
    const collection = await db()
    return collection.find().toArray()
  }
}

module.exports = todoService
