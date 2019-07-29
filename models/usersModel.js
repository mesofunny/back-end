const db = require('./dbConfig');

class UsersModel {
  static async post(data) {
    try {
      const [id] = await db('users')
        .insert(data)
        .returning('id');
      const user = await this.findById(id);
      return user;
    } catch (error) {
      return error;
    }
  }

  static async findAll() {
    try {
      const response = await db('users');
      return response;
    } catch (error) {
      return error;
    }
  }

  static async findById(id) {
    try {
      const response = await db('users')
        .select('firstname', 'lastname', 'email')
        .where({ id })
        .first();
      return response;
    } catch (error) {
      return error;
    }
  }

  static async findByEmail(email) {
    try {
      const response = await db('users')
        .where({ email })
        .first();
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = UsersModel;
