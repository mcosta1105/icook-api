const Cuisine = require('../models/Cuisine');

// Create Cuisine
const createCuisine = async (req, res) => {
  try {
    const cuisine = await Cuisine.create({ ...req.body });
    return res.json(cuisine);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

// Get All Cuisines
const getCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisine.findAll();
    return res.json(cuisines);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ error: e });
  }
};

// Get Single Cuisine
const getCuisine = async (req, res) => {
  try {
    const { id } = req.params;
    const cuisine = await Cuisine.findByPk(id);
    if (!cuisine) {
      return res.status(404).json({ error: 'Cuisine not found' });
    }
    return res.json(cuisine);
  } catch (e) {
    console.log(e);
    return res.json({ error: e });
  }
};

module.exports = {
  createCuisine,
  getCuisines,
  getCuisine,
};
