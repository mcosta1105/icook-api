const { Model, DataTypes } = require('sequelize');

class Rating extends Model {
  static init(sequelize) {
    super.init(
      {
        stars: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: 'ratings',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Recipe, {
      foreignKey: 'recipe_id',
      as: 'recipe',
    });
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

module.exports = Rating;
