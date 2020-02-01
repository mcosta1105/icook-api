const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

// User routes
routes.get('/users/:user_id', UserController.getUser);
routes.get('/users', UserController.getUsers);
routes.post('/users', UserController.createUser);
routes.put('/users/:user_id', UserController.uptadeUser);
routes.delete('/users/:user_id', UserController.deleteUser);

module.exports = routes;
