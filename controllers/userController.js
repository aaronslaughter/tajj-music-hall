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

const updateUser = async (req, res) => {
  const userId = parseInt(req.params.userId);
  const updatedUser = await User.update(
    {
      ...req.body,
      updatedAt: new Date()
    },
    {
      where: {
        id: userId
      },
      returning: true
    }
  );
  res.status(200).send(updatedUser);
};

const deleteUser = async (req, res) => {
  const deletedId = parseInt(req.params.userId);
  await User.destroy({
    where: {
      id: deletedId
    }
  });
  res.status(200).send({ message: `Deleted user with id of ${deletedId}!` });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
};
