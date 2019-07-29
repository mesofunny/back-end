const express = require('express');
const UserControllers = require('../controllers/Users');

const router = express.Router();

router.post('/users/register', UserControllers.registerUser);

module.exports = router;
