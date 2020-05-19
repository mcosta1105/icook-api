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
        tableName: 'users',
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
