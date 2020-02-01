const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    return res.json(user);
  } catch (e) {
    return res.status(400).json({ error: e.errors[0].message });
  }
};

// Get All Users
const getUsers = async (req, res) => {
  try {
    const users = await await User.findAll();
    return res.json(users);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ error: e.errors[0].message });
  }
};

// Get User
const getUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.json({ error: e.errors[0].message });
  }
};

// Update User
const uptadeUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await User.findByPk(user_id);
    if (user) {
      const [numberOfAffectedRows, affectedRows] = await User.update({ ...req.body }, {
        where: { user_id },
        returning: true,
        plain: true,
      });
      if (affectedRows) {
        return res.json({ numberOfAffectedRows, affectedRows });
      }
    }
    return res.status(404).json({ error: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.jsonn({ error: e.errors[0].message });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await User.findByPk(user_id);
    if (user) {
      await User.destroy({
        where: { user_id },
      });
      return res.json({ message: `${user.username} successfully deleted.` });
    }
    return res.status(404).json({ error: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.jsonn({ error: e.errors[0].message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  uptadeUser,
};
