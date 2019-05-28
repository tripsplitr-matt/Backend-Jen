const express = require('express');

const configureMiddleware = require('./middleware');
const usersRouter = require('../users/usersRouter');

const server = express();

configureMiddleware(server);

server.use('api/users', usersRouter);

server.get('/', (req, res) => {
  res.send('TripSplitr')
});

module.exports = server;