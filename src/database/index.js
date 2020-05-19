const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

// Models
const Category = require('../models/Category');
const Cuisine = require('../models/Cuisine');
const Diet = require('../models/Diet');
const Recipe = require('../models/Recipe');
const User = require('../models/User');
const Ingredient = require('../models/Ingredient');
const Step = require('../models/Step');

// Initiate Models
Category.init(connection);
Cuisine.init(connection);
Diet.init(connection);
Recipe.init(connection);
User.init(connection);
Ingredient.init(connection);
Step.init(connection);

// Associate Models
Object.values(connection.models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(connection.models));

// Test connection
connection
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = connection;
