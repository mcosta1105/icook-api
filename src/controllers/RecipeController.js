const Recipe = require('../models/Recipe');
const User = require('../models/User');

const createRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const recipe = await Recipe.create({
      user_id: id,
      ...req.body,
    });

    return res.json(recipe);
  } catch (e) {
    // console.log(e);
    return res.status(400).json({ error: e });
  }
};

// Get All Recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      include: { association: 'user' },
    });
    return res.json(recipes);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
};

// Get Single Recipe
const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByPk(id, {
      include: { association: 'user' },
    });
    if (!recipe) {
      return res.status(400).json({ error: 'Recipe not found' });
    }
    return res.json(recipe);
  } catch (e) {
    return res.json({ error: e.errors[0].message });
  }
};

// Get All Recipes of a User
const getRecipesByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      include: { association: 'recipes' },
    });

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    return res.json(user);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
};

// Update Recipe
const updateRecipe = async (req, res) => {
  try {
    const { userId, id } = req.params;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    const recipe = await Recipe.findByPk(id);
    if (recipe) {
      const [numberOfAffectedRows, affectedRows] = await Recipe.update({ ...req.body }, {
        where: { id },
        returning: true,
        plain: true,
      });
      if (affectedRows) {
        return res.json({ numberOfAffectedRows, affectedRows });
      }
    }
    return res.status(400).json({ error: 'Recipe not found ' });
  } catch (e) {
    return res.json({ error: e });
  }
};

// Delete Recipe
const deleteRecipe = async (req, res) => {
  try {
    const { userId, id } = req.params;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const recipe = await Recipe.findByPk(id);

    if (recipe) {
      await Recipe.destroy({
        where: { id },
      });
      return res.json({ message: `${recipe.title} successfully deleted.` });
    }

    return res.status(400).json({ error: 'Recipe not found ' });
  } catch (e) {
    return res.json({ error: e });
  }
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipe,
  getRecipesByUser,
  updateRecipe,
  deleteRecipe,
};
