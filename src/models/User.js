const Sequelize = require('sequelize');
const db = require('../database/index');

const User = db.define('user', {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  profile_image: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
