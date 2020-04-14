const Ingredient = require('../models/Ingredient');
const Recipe = require('../models/Recipe');

const createIngredient = async (req, res) => {
  try {
    const {
      recipeId: recipe_id,
      ingredientName: ingredient_name,
      quantity,
      unit,
    } = req.body;

    const recipe = await Recipe.findByPk(recipe_id);

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    const ingredient = await Ingredient.create({
      recipe_id,
      ingredient_name,
      quantity,
      unit,
    });
    return res.json({ ingredient });
  } catch (e) {
    return res.json({ error: e });
  }
};

// Update Ingredient
const updateIngredient = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      recipeId: recipe_id,
      ingredientName: ingredient_name,
      quantity,
      unit,
    } = req.body;

    const ingredient = await Ingredient.findByPk(id);

    if (ingredient) {
      const [numberOfAffectedRows, affectedRows] = await Ingredient.update({
        recipe_id,
        ingredient_name,
        quantity,
        unit,
      }, {
        where: { id },
        returning: true,
        plain: true,
      });
      if (affectedRows) {
        return res.json({ numberOfAffectedRows, affectedRows });
      }
    }
    return res.status(404).json({ error: 'Ingredient not found.' });
  } catch (e) {
    return res.json({ error: e });
  }
};

const deleteIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await Ingredient.findByPk(id);
    if (ingredient) {
      await Ingredient.destroy({
        where: { id },
      });
      return res.json({ message: `${ingredient.ingredient_name} successfully deleted.` });
    }
    return res.status(404).res.json({ error: 'Ingredient not found.' });
  } catch (e) {
    return res.json({ error: e });
  }
};

module.exports = {
  createIngredient,
  updateIngredient,
  deleteIngredient,
};
