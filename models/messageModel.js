const db = require('./dbConfig');

class MessageModel {
  static async post(data) {
    try {
      const [id] = await db('messages')
        .insert(data)
        .returning('id');
      const message = await this.findById(id);
      return message;
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
  static async findById(id) {
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
        .where({ 'm.id': id }).first();
      return messages;
    } catch (error) {
      return error;
    }
  }
}

module.exports = MessageModel;
