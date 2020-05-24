const Rating = require('../models/Rating');

const addRating = async (req, res) => {
  try {
    const { stars, user_id, recipe_id } = req.body;

    const rating = await Rating.create({
      stars,
      recipe_id,
      user_id,
    });

    return res.json(rating);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Internal server error');
  }
};

const getRatings = async (req, res) => {
  res.send(req.body);
};

module.exports = {
  addRating,
  getRatings,
};
