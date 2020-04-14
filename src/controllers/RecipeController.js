const User = require('../models/User');
const Recipe = require('../models/Recipe');
const Cuisine = require('../models/Cuisine');
const Category = require('../models/Category');
const Diet = require('../models/Diet');

const createRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, cuisineId, categoryId, dietId } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const cuisine = await Cuisine.findByPk(cuisineId);
    if (!cuisine) {
      return res.status(400).json({ error: 'Cuisine not found' });
    }

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(400).json({ error: 'Category not found' });
    }

    const diet = await Diet.findByPk(dietId);
    if (!diet) {
      return res.status(400).json({ error: 'Diet not found' });
    }

    const recipe = await Recipe.create({
      user_id: id,
      title,
    });


    await recipe.addCuisine(cuisine);
    await recipe.addCategory(category);
    await recipe.addDiet(diet);

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
      include: [
        {
          association: 'user',
          attributes: ['id', 'first_name', 'last_name'],
        },
        {
          association: 'ingredients',
          attributes: ['id', 'ingredient_name', 'quantity', 'unit'],
        },
        {
          association: 'cuisines',
          attributes: ['id', 'cuisine_name'],
          through: { attributes: [] },
        },
        {
          association: 'categories',
          attributes: ['id', 'category_name'],
          through: { attributes: [] },
        },
        {
          association: 'diets',
          attributes: ['id', 'diet_type'],
          through: { attributes: [] },
        },
      ],
      attributes: ['id', 'title'],
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
      include: [
        {
          association: 'user',
          attributes: ['id', 'first_name', 'last_name'],
        },
        {
          association: 'cuisines',
          attributes: ['id', 'cuisine_name'],
          through: { attributes: [] },
        },
        {
          association: 'categories',
          attributes: ['id', 'category_name'],
          through: { attributes: [] },
        },
      ],
      attributes: ['id', 'title'],
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
