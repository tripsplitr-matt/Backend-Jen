const express = require('express');
const cors = require('cors');


const configureMiddleware = require('./middleware');
const usersRouter = require('../users/usersRouter');
const authRouter = require('../auth/auth-router');

const server = express();

configureMiddleware(server);

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('TripSplitr')
});

module.exports = server;