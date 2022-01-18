const { RowDescriptionMessage } = require('pg-protocol/dist/messages');
const { Users_Events } = require('../models');

const getAllUsersEvents = async (req, res) => {
  const allUsersEvents = await Users_Events.findAll();
  res.status(200).send(allUsersEvents);
};

const createNewUsersEvents = async (req, res) => {
  const newUsersEvents = await Users_Events.create({
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.status(201).send(newUsersEvents);
};

const updateUsersEvents = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUsersEvents = await Users_Events.update(
    {
      ...req.body,
      updatedAt: new Date()
    },
    {
      where: {
        id: id
      },
      returning: true
    }
  );
  res.status(200).send(updatedUsersEvents);
};

const deleteUsersEvents = async (req, res) => {
  const id = parseInt(req.params.id);
  await Users_Events.destroy({
    where: {
      id: id
    }
  });
  res.status(200).send({ message: `Deleted join item with id of ${id}!` });
};

module.exports = {
  getAllUsersEvents,
  createNewUsersEvents,
  updateUsersEvents,
  deleteUsersEvents
};
