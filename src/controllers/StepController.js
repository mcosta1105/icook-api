const Step = require('../models/Step');
const Recipe = require('../models/Recipe');

const createStep = async (req, res) => {
  try {
    const {
      recipeId: recipe_id,
      description,
      order,
    } = req.body;

    const recipe = await Recipe.findByPk(recipe_id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found.' });
    }

    const step = await Step.create({
      recipe_id,
      description,
      order,
    });
    return res.json(step);
  } catch (e) {
    return res.json({ error: e });
  }
};

const updateStep = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      recipeId: recipe_id,
      description,
      order,
    } = req.body;

    const step = await Step.findByPk(id);

    if (step) {
      const [numberOfAffectedRows, affectedRows] = await Step.update({
        recipe_id,
        description,
        order,
      }, {
        where: { id },
        returning: true,
        plain: true,
      });
      if (affectedRows) {
        return res.json({ numberOfAffectedRows, affectedRows });
      }
    }
    return res.status(404).json({ error: 'Step not found' });
  } catch (e) {
    return res.json({ error: e });
  }
};

const deleteStep = async (req, res) => {
  try {
    const { id } = req.params;

    const step = await Step.findByPk(id);
    if (!step) {
      return res.status(404).json({ error: 'Step not found.' });
    }
    step.destroy({
      where: { id },
    });
    return res.json({ message: 'Step successfully deleted.' });
  } catch (e) {
    return res.json({ error: e });
  }
};

module.exports = {
  createStep,
  updateStep,
  deleteStep,
};
