const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const createToken = async (user) => {
  const { id } = user;
  try {
    const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });
    return token;
  } catch (error) {
    return error;
  }
};

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);
  return hashed;
};

const comparePassword = (password, hash) => {
  const compare = bcrypt.compareSync(password, hash);
  return compare;
};

const errorResponse = (res, error) => res.status(500).json({ error });

module.exports = {
  createToken, hashPassword, comparePassword, errorResponse,
};
