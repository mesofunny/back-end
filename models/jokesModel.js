/* eslint-disable camelcase */
/* eslint-disable no-template-curly-in-string */
const db = require('./dbConfig');

class JokesModel {
  static async findAll() {
    try {
      const response = await db('jokes')
        .select('id', 'title', 'joke', 'user_id')
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

  static async post(joke) {
    try {
      const [user_id] = await db('jokes')
        .insert(joke)
        .returning('user_id');
      const jokes = await this.getUserJoke(user_id);
      return jokes;
    } catch (error) {
      return error;
    }
  }

  static async getUserJoke(id) {
    try {
      const jokes = await db('jokes')
        .select('id', 'title', 'joke', 'private')
        .where({ user_id: id });
      return jokes;
    } catch (error) {
      return error;
    }
  }

  static async findById(id) {
    try {
      const jokes = await db('jokes')
        .where({ id })
        .first();
      return jokes;
    } catch (error) {
      return error;
    }
  }

  static async remove(user_id, id) {
    try {
      const joke = await this.findById(id);
      if (!joke) {
        return null;
      }
      if (joke.user_id === user_id) {
        const result = await db('jokes')
          .del()
          .where({ id });
        return result;
      }
      return 'unable to delete';
    } catch (error) {
      return error;
    }
  }

  static async update(user_id, id, changes) {
    try {
      const joke = await this.findById(id);
      if (!joke) {
        return null;
      }
      if (joke.user_id === user_id) {
        const result = await db('jokes')
          .where({ id })
          .update(changes)
          .returning('*');
        delete result[0].user_id;
        return result[0];
      }
      return 'unable to update';
    } catch (error) {
      return error;
    }
  }
}

module.exports = JokesModel;
