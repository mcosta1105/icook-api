const User = require('../models/User');

const addUser = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  const user = await User.create({
    first_name: firstName,
    last_name: lastName,
    username,
    email,
    password,
  });

  return res.json(user);
};

module.exports = { addUser };
