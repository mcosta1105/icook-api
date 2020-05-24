const { Model, DataTypes } = require('sequelize');

class Cuisine extends Model {
  static init(sequelize) {
    super.init(
      {
        cuisine_name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'cuisines',
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Recipe, {
      foreignKey: 'cuisine_id',
      through: 'recipe_cuisines',
      as: 'recipes',
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  }
}

module.exports = Cuisine;
