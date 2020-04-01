const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const Category = require('../models/Category');
const Cuisine = require('../models/Cuisine');
const Diet = require('../models/Diet');
const Recipe = require('../models/Recipe');
const User = require('../models/User');

Category.init(connection);
Cuisine.init(connection);
Diet.init(connection);
Recipe.init(connection);
User.init(connection);


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
