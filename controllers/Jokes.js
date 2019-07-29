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
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}

module.exports = Jokes;
