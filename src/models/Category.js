const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        category_name: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = Category;

// const Category = db.define('category', {
//   category_name: {
//     type: Sequelize.STRING,
//   },
// });

// module.exports = Category;
