const db = require('./dbConfig');

class MessageModel {
  static async post(data) {
    try {
      const message = await db('messagea')
        .insert(data)
        .returning('*');
      return message;
    } catch (error) {
      return error;
    }
  }

  static async findAll() {
    try {
      const messages = await db('messages');
      return messages;
    } catch (error) {
      return error;
    }
  }

  static async find(id) {
    try {
      const messages = await db('messages').where({ id });
      return messages;
    } catch (error) {
      return error;
    }
  }
}

module.exports = MessageModel;
