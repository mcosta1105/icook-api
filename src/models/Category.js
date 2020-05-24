const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        category_name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'categories',
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Recipe, {
      foreignKeyConstraint: true,
      foreignKey: 'category_id',
      through: 'recipe_categories',
      as: 'recipes',
      onDelete: 'cascade',
      onUpdate: 'cascade',
      hooks: true,
    });
  }
}

module.exports = Category;
