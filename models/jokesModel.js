const db = require('./dbConfig');

class JokesModel {
  static async findAll() {
    try {
      const response = await db('jokes')
        .select('id', 'title', 'joke')
        .where({ private: 'no' });
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = JokesModel;
