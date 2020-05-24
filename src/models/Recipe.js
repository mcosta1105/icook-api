const { Model, DataTypes } = require('sequelize');

class Recipe extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'recipes',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    this.belongsToMany(models.Cuisine, {
      foreignKey: 'recipe_id',
      through: 'recipe_cuisines',
      as: 'cuisines',
    });
    this.belongsToMany(models.Category, {
      foreignKey: 'recipe_id',
      through: 'recipe_categories',
      as: 'categories',
    });
    this.belongsToMany(models.Diet, {
      foreignKey: 'recipe_id',
      through: 'recipe_diets',
      as: 'diets',
    });
    this.hasMany(models.Ingredient, {
      foreignKey: 'recipe_id',
      as: 'ingredients',
    });
    this.hasMany(models.Step, {
      foreignKey: 'recipe_id',
      as: 'steps',
    });
    this.hasMany(models.Rating, {
      foreignKey: 'recipe_id',
      as: 'ratings',
    });
  }
}

module.exports = Recipe;
