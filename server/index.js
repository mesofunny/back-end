const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const routes = require('../routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use(fileUpload({ useTempFiles: true }));

server.get('/', (req, res) => {
  res.status(200).json('Welcome to Jokes API');
});

server.use('/api/v1', routes);
server.use('*', (req, res) => {
  res.status(404).json('Invalid route');
});

module.exports = server;
