const express = require('express');

const UserController = require('./controllers/UserController');
const DietController = require('./controllers/DietController');
const CuisineController = require('./controllers/CuisineController');

const routes = express.Router();

// User routes
routes.get('/users/:id', UserController.getUser);
routes.get('/users', UserController.getUsers);
routes.post('/users', UserController.createUser);
routes.put('/users/:id', UserController.uptadeUser);
routes.delete('/users/:id', UserController.deleteUser);

// Diet router
routes.post('/diets', DietController.createDiet);
routes.get('/diets', DietController.getDiets);
routes.get('/diets/:id', DietController.getDiet);

// Cuisine router
routes.post('/cuisines', CuisineController.createCuisine);
routes.get('/cuisines', CuisineController.getCuisines);
routes.get('/cuisines/:id', CuisineController.getCuisine);

module.exports = routes;
