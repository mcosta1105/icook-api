const { Model, DataTypes } = require('sequelize');

class Diet extends Model {
  static init(sequelize) {
    super.init(
      {
        diet_type: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'diets',
      }
    );
  }

  static associations(models) {
    this.belongsToMany(models.Recipe, {
      foreignKey: 'diet_id',
      through: 'recipe_diets',
      as: 'recipes',
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  }
}

module.exports = Diet;
