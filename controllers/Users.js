const Models = require('../models/usersModel');
const Middlewares = require('../middlewares/Auth');

class Users {
  static async registerUser(req, res) {
    try {
      const password = await Middlewares.hashPassword(req.body.password);
      req.body.password = password;
      const user = await Models.post(req.body);
      const token = await Middlewares.createToken(user);
      res.json({ ...user, token });
    } catch (error) {
      res.json({ error });
    }
  }
  static async loginuser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await Models.findByEmail(email);
    } catch (error) {
      res.json({ error });
    }
  }
}

module.exports = Users;
