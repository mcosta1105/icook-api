const Diet = require('../models/Diet');

// Create Diet
const createDiet = async (req, res) => {
  try {
    const diet = await Diet.create({ ...req.body });
    return res.json(diet);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

// Get All Diets
const getDiets = async (req, res) => {
  try {
    const diets = await Diet.findAll();
    return res.json(diets);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ error: e.errors[0].message });
  }
};

// Get Diet
const getDiet = async (req, res) => {
  try {
    const { id } = req.params;
    const diet = await Diet.findByPk(id);
    if (!diet) {
      return res.status(404).json({ error: 'Diet not found' });
    }
    return res.status(200).json(diet);
  } catch (e) {
    console.log(e);
    return res.json({ error: e.errors[0].message });
  }
};

module.exports = {
  createDiet,
  getDiets,
  getDiet,
};
