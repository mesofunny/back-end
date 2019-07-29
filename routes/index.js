const express = require('express');
const UserControllers = require('../controllers/Users');
const Validations = require('../middlewares/Validations');

const router = express.Router();

router.post(
  '/users/register',
  Validations.registerValidation,
  UserControllers.registerUser,
);
router.post(
  '/users/login',
  Validations.loginValidation,
  UserControllers.loginuser,
);

module.exports = router;
