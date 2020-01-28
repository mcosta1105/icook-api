const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

// User routes
routes.post('/users', UserController.addUser);

module.exports = routes;
