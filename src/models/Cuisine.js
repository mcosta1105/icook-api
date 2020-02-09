const Sequelize = require('sequelize');
const db = require('../database/index');

const Cuisine = db.define('cuisine', {
  cuisine_name: {
    type: Sequelize.STRING,
  },
});

module.exports = Cuisine;
