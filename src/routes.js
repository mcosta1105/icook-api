const express = require('express');
const UserController = require('./controllers/UserController');
const DietController = require('./controllers/DietController');
const CuisineController = require('./controllers/CuisineController');
const CategoryController = require('./controllers/CategoryController');
const RecipeController = require('./controllers/RecipeController');
const IngredientController = require('./controllers/IngredientController');
const Step = require('./controllers/StepController');

const routes = express.Router();

// User routes
routes.get('/v1/users/:id', UserController.getUser);
routes.get('/v1/users', UserController.getUsers);
routes.post('/v1/users', UserController.createUser);
routes.put('/v1/users/:id', UserController.uptadeUser);
routes.delete('/v1/users/:id', UserController.deleteUser);

// Recipe routes
routes.get('/v1/recipes', RecipeController.getRecipes);
routes.get('/v1/users/:id/recipes', RecipeController.getRecipesByUser);
routes.post('/v1/users/:id/recipes', RecipeController.createRecipe);
routes.get('/v1/recipes/:id', RecipeController.getRecipe);
routes.put('/v1/users/:userId/recipes/:id', RecipeController.updateRecipe);
routes.delete('/v1/users/:userId/recipes/:id', RecipeController.deleteRecipe);

// Ingredient routes
routes.post('/v1/ingredients', IngredientController.createIngredient);
routes.put('/v1/ingredients/:id', IngredientController.updateIngredient);
routes.delete('/v1/ingredients/:id', IngredientController.deleteIngredient);

// Step routes
routes.post('/v1/steps', Step.createStep);
routes.put('/v1/steps/:id', Step.updateStep);
routes.delete('/v1/steps/:id', Step.deleteStep);

// Diet router
routes.post('/v1/diets', DietController.createDiet);
routes.get('/v1/diets', DietController.getDiets);
routes.get('/v1/diets/:id', DietController.getDiet);

// Cuisine router
routes.post('/v1/cuisines', CuisineController.createCuisine);
routes.get('/v1/cuisines', CuisineController.getCuisines);
routes.get('/v1/cuisines/:id', CuisineController.getCuisine);

// Category router
routes.post('/v1/categories', CategoryController.createCategory);
routes.get('/v1/categories', CategoryController.getCategories);
routes.get('/v1/categories/:id', CategoryController.getCategory);


module.exports = routes;
