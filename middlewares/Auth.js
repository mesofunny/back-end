const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

class Auth {
  static async verifyToken(req, res, next) {
    const token = req.headers.authorization;
    try {
      if (token) {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.id;
        console.log(req.id);
        return next();
      }
      return res.status(401).json({
        message: 'No token provided, must be set on the Authorization Header'
      });
    } catch (error) {
      return res
        .status(401)
        .json({ message: 'Unable to verify token, Pls provide a valid token' });
    }
  }
}

module.exports = Auth;
