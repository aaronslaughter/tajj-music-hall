const { RowDescriptionMessage } = require('pg-protocol/dist/messages');
const { User, Users_Events, Event } = require('../models');

const getAllUsers = async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).send(allUsers);
};

const getEventsByUserId = async (req, res) => {
  const userId = parseInt(req.params.userId);
  const allEvents = await User.findAll({
    include: [
      {
        model: Event,
        as: 'event_list',
        through: { attribute: [] }
      }
    ],
    where: { id: userId },
    returning: true
  });
  res.status(200).send(allEvents);
};
const getEventsByUserName = async (req, res) => {
  const name = req.params.userName;
  const allEvents = await User.findAll({
    include: [
      {
        model: Event,
        as: 'event_list',
        through: { attributes: [] }
      }
    ],
    where: { name: name }
  });
  res.status(200).send(allEvents);
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
  getEventsByUserId,
  getEventsByUserName,
  createNewUser,
  updateUser,
  deleteUser
};
