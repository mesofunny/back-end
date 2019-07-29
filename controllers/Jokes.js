/* eslint-disable camelcase */
const Models = require('../models/jokesModel');

class Jokes {
  static async getAllJokes(req, res) {
    try {
      const jokes = await Models.findAll();
      if (!jokes.length) {
        return res.statut(404).json({ message: 'No jokes' });
      }
      return res.status(200).json({ jokes });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async jokeOfTheDay(req, res) {
    try {
      const jokes = await Models.findAll();
      const joke = jokes[Math.floor(Math.random() * jokes.length)];
      return res.status(200).json({ joke });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async searchJoke(req, res) {
    const { text } = req.query;
    try {
      const jokes = await Models.search(text);
      return res.status(200).json({ jokes });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async addJoke(req, res) {
    const { title, joke, status } = req.body;
    const user_id = req.id;
    try {
      const result = await Models.post({
        title,
        joke,
        private: status,
        user_id
      });
      return res.status(201).json({ jokes: result });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getUserJoke(req, res) {
    const user_id = req.id;
    try {
      const jokes = await Models.getUserJoke(user_id);
      if (!jokes.length) {
        return res.status(404).json('No jokes is associated with this user');
      }
      return res.status(200).json({ jokes });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async deleteUserJoke(req, res) {
    const user_id = req.id;
    const id = Number(req.params.id);
    try {
      const joke = await Models.remove(user_id, id);
      if (joke === 'unable to delete') {
        return res
          .status(403)
          .json({ message: 'User can only delete jokes they created' });
      }
      if (!joke) {
        return res
          .status(400)
          .json({ message: 'No joke associated with this ID' });
      }
      return res.status(204).json({ message: 'Deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = Jokes;
