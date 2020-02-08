const Sequelize = require('sequelize');
const db = require('../database/index');

const Diet = db.define('diet', {
  diet_type: {
    type: Sequelize.STRING,
  },
});

module.exports = Diet;
