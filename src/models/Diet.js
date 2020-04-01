const { Model, DataTypes } = require('sequelize');

class Diet extends Model {
  static init(sequelize) {
    super.init(
      {
        diet_type: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = Diet;


// const Diet = db.define('diet', {
//   diet_type: {
//     type: Sequelize.STRING,
//   },
// });

// module.exports = Diet;
