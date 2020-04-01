const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        profile_image: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Recipe, {
      foreignKey: 'user_id',
      as: 'recipes',
    });
  }
}

module.exports = User;

// const User = db.define('user', {
//   first_name: {
//     type: Sequelize.STRING,
//   },
//   last_name: {
//     type: Sequelize.STRING,
//   },
//   username: {
//     type: Sequelize.STRING,
//   },
//   email: {
//     type: Sequelize.STRING,
//   },
//   password: {
//     type: Sequelize.STRING,
//   },
//   profile_image: {
//     type: Sequelize.STRING,
//   },
// });

// User.associate = models => {
//   User.hasMany(models.Recipe, {
//     foreignKey: 'user_id',
//     as: 'recipes',
//   });
// };


// module.exports = User;
