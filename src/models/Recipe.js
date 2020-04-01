const { Model, DataTypes } = require('sequelize');

class Recipe extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

module.exports = Recipe;

// const Recipe = db.define('recipe', {
//   title: {
//     type: DataTypes.STRING,
//   },
// });

// Recipe.associate = models => {
//   Recipe.belongsTo(models.User, {
//     foreignKey: 'user_id',
//     as: 'user',
//   });
// };

// module.exports = Recipe;
