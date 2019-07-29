const Models = require('../models/usersModel');

class Users {
  static async registerUser(req, res) {
    try {
      const users = await Models.post(req.body);
      res.json({ users });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
}

module.exports = Users;
