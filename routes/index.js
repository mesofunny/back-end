const express = require('express');
const UserControllers = require('../controllers/Users');
const JokeControllers = require('../controllers/Jokes');
const MessageControllers = require('../controllers/Messages');
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
  '/users/jokes',
  Auth.verifyToken,
  Validations.addJokeValidation,
  JokeControllers.addJoke
);
router.get('/users/jokes', Auth.verifyToken, JokeControllers.getUserJoke);
router.delete(
  '/users/jokes/:id',
  Auth.verifyToken,
  JokeControllers.deleteUserJoke
);
router.put(
  '/users/jokes/:id',
  Auth.verifyToken,
  Validations.addJokeValidation,
  JokeControllers.updateUserJoke
);

router.post(
  '/users/create',
  Validations.registerValidation,
  UserControllers.createUser
);

router.post(
  '/users/messages',
  Auth.verifyToken,
  MessageControllers.postMessage
);

router.get(
  '/users/messages/all',
  Auth.verifyToken,
  MessageControllers.getAllMessages
);

router.get(
  '/users/messages/received',
  Auth.verifyToken,
  MessageControllers.getReceivedMessages
);

router.get(
  '/users/messages/sent',
  Auth.verifyToken,
  MessageControllers.getSentMessages
);

module.exports = router;
