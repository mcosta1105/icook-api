const { Model, DataTypes } = require('sequelize');

class Cuisine extends Model {
  static init(sequelize) {
    super.init(
      {
        cusine_name: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = Cuisine;

// const Cuisine = db.define('cuisine', {
//   cuisine_name: {
//     type: Sequelize.STRING,
//   },
// });

// module.exports = Cuisine;
