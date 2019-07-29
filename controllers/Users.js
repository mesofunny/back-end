const Models = require('../models/usersModel');
const { hashPassword, comparePassword, createToken } = require('../helpers');

class Users {
  static async registerUser(req, res) {
    try {
      const password = await hashPassword(req.body.password);
      req.body.password = password;
      const user = await Models.post(req.body);
      if (user.routine === '_bt_check_unique') {
        return res
          .status(409)
          .json({ message: 'An account exists  with this email' });
      }
      const token = await createToken(user);
      return res.status(201).json({ ...user, token });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async loginuser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await Models.findByEmail(email);
      if (!user) {
        return res.status(400).json({ message: 'Incorrect password or email' });
      }
      const hashResult = await comparePassword(password, user.password);
      if (hashResult) {
        delete user.password;
        const token = await createToken(user);
        return res.status(200).json({ ...user, token });
      }
      return res.status(400).json({ message: 'Incorrect password or email' });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = Users;
