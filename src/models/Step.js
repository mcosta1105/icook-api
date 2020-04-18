const { Model, DataTypes } = require('sequelize');

class Step extends Model {
  static init(sequelize) {
    super.init(
      {
        description: DataTypes.STRING,
        order: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: 'steps',
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

module.exports = Step;
