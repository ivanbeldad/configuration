const MongoClient = require('mongodb').MongoClient

const db = async () => {
  const client = await MongoClient.connect(process.env.DB_URI)
  return client.db(process.env.DB_NAME).collection('todos')
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
