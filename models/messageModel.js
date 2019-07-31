const db = require('./dbConfig');

class MessageModel {
  static async post(data) {
    try {
      const message = await db('messages')
        .insert(data)
        .returning('*');
      return message[0];
    } catch (error) {
      return error;
    }
  }

  static async findAll() {
    try {
      const messages = await db('messages as m')
        .select(
          'm.id',
          'm.message',
          'u1.email as sender',
          'u2.email as receiver'
        )
        .join('users as u1', 'm.sender', 'u1.id')
        .join('users as u2', 'm.receiver', 'u2.id');
      return messages;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async findSent(sender) {
    try {
      const messages = await db('messages as m')
        .select(
          'm.id',
          'm.message',
          'u1.email as sender',
          'u2.email as receiver'
        )
        .join('users as u1', 'm.sender', 'u1.id')
        .join('users as u2', 'm.receiver', 'u2.id')
        .where({ sender });
      return messages;
    } catch (error) {
      return error;
    }
  }

  static async findReceived(receiver) {
    try {
      const messages = await db('messages as m')
        .select(
          'm.id',
          'm.message',
          'u1.email as sender',
          'u2.email as receiver'
        )
        .join('users as u1', 'm.sender', 'u1.id')
        .join('users as u2', 'm.receiver', 'u2.id')
        .where({ receiver });
      return messages;
    } catch (error) {
      return error;
    }
  }
}

module.exports = MessageModel;
