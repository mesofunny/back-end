const db = require('./dbConfig');

class MessageModel {
  static async post(data) {
    try {
      const message = await db('messages')
        .insert(data)
        .returning('*');
      return message;
    } catch (error) {
      console.log(error);

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

  static async findSent(sender) {
    try {
      const messages = await db('messages').where({ sender });
      return messages;
    } catch (error) {
      return error;
    }
  }

  static async findReceived(receiver) {
    try {
      const messages = await db('messages').where({ receiver });
      return messages;
    } catch (error) {
      return error;
    }
  }
}

module.exports = MessageModel;
