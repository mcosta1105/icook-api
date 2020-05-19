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
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Recipe, {
      foreignKey: 'category_id',
      through: 'recipe_cuisines',
      as: 'recipes',
    });
  }
}

module.exports = Category;

// const Category = db.define('category', {
//   category_name: {
//     type: Sequelize.STRING,
//   },
// });

// module.exports = Category;
