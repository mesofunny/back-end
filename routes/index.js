const express = require('express');
const UserControllers = require('../controllers/Users');
const JokeControllers = require('../controllers/Jokes');
const Validations = require('../middlewares/Validations');
const Auth = require('../middlewares/Auth');

const router = express.Router();

router.post(
  '/users/register',
  Validations.registerValidation,
  UserControllers.registerUser
);
router.post(
  '/users/login',
  Validations.loginValidation,
  UserControllers.loginuser
);
router.get('/jokes', JokeControllers.getAllJokes);
router.get('/jokesOfTheDay', JokeControllers.jokeOfTheDay);
router.get('/search', JokeControllers.searchJoke);
router.post(
  '/jokes',
  Auth.verifyToken,
  Validations.addJokeValidation,
  JokeControllers.addJoke
);

module.exports = router;
