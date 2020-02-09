const Category = require('../models/Category');

// Create category
const createCategory = async (req, res) => {
  try {
    const category = await Category.create({ ...req.body });
    return res.json(category);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

// Get All Categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.json(categories);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ error: e });
  }
};

// Get Category
const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    return res.json(category);
  } catch (e) {
    console.log(e);
    return res.json({ error: e });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
};
