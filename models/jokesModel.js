/* eslint-disable no-template-curly-in-string */
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

  static async search(item) {
    const value = `%${item}%`;
    try {
      const response = await db('jokes')
        .select('id', 'title', 'joke')
        .where('title', 'like', `${value}`)
        .orWhere('joke', 'like', `${value}`);
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = JokesModel;
