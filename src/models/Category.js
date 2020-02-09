const Sequelize = require('sequelize');
const db = require('../database/index');

const Category = db.define('category', {
  category_name: {
    type: Sequelize.STRING,
  },
});

module.exports = Category;
