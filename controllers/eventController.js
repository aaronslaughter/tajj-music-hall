const { RowDescriptionMessage } = require('pg-protocol/dist/messages');
const { Event } = require('../models');

const getAllEvents = async (req, res) => {
  const allEvents = await Event.findAll();
  res.status(200).send(allEvents);
};

const createNewEvent = async (req, res) => {
  const newEvent = await Event.create({
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.status(201).send(newEvent);
};

const updateEvent = async (req, res) => {
  const eventId = parseInt(req.params.eventId);
  const updatedEvent = await Event.update(
    {
      ...req.body,
      updatedAt: new Date()
    },
    {
      where: {
        id: eventId
      },
      returning: true
    }
  );
  res.status(200).send(updatedEvent);
};

const deleteEvent = async (req, res) => {
  const deletedId = parseInt(req.params.eventId);
  await Event.destroy({
    where: {
      id: deletedId
    }
  });
  res.status(200).send({ message: `Deleted event with id of ${deletedId}!` });
};

module.exports = {
  getAllEvents,
  createNewEvent,
  updateEvent,
  deleteEvent
};
