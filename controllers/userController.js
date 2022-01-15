const { RowDescriptionMessage } = require('pg-protocol/dist/messages');
const { User } = require('../models');

const getAllUsers = async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).send(allUsers);
};

const createNewUser = async (req, res) => {
  const newUser = await User.create({
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.status(201).send(newUser);
};

module.exports = {
  getAllUsers,
  createNewUser
};
