
const { Model, DataTypes } = require('sequelize');

class Ingredient extends Model {
  static init(sequelize) {
    super.init(
      {
        ingredient_name: DataTypes.STRING,
        quantity: DataTypes.REAL,
        unit: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'ingredients',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Recipe, {
      foreignKey: 'recipe_id',
      as: 'recipe',
    });
  }
}

module.exports = Ingredient;
