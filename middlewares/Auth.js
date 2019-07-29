const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

class Auth {
  static async createToken(user) {
    const { id } = user;
    try {
      const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '24h'
      });
      return token;
    } catch (error) {
      return error;
    }
  }

  static async verifyToken(req, res, next) {
    const token = req.headers.authorization;
    try {
      if (token) {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.id;
        return next();
      }
      return res.status(403).json({
        message: 'No token provided, must be set on the Authorization Header'
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Unable to verify token, Pls provide a valid token' });
    }
  }

  static hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(password, salt);
    return hashed;
  }
}

module.exports = Auth;
