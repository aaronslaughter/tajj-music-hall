const { RowDescriptionMessage } = require('pg-protocol/dist/messages');
const { Comment } = require('../models');

const getAllComments = async (req, res) => {
  const allComments = await Comment.findAll();
  res.status(200).send(allComments);
};

const getCommentsByUserId = async (req, res) => {
  const userId = parseInt(req.params.userId);
  const allComments = await Comment.findAll({
    where: { user_id: userId }
  });
  res.status(200).send(allComments);
};

const getCommentsByEventId = async (req, res) => {
  const eventId = parseInt(req.params.eventId);
  const allComments = await Comment.findAll({
    where: { event_id: eventId }
  });
  res.status(200).send(allComments);
};

const createNewComment = async (req, res) => {
  const newComment = await Comment.create({
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.status(201).send(newComment);
};

const updateComment = async (req, res) => {
  const commentId = parseInt(req.params.commentId);
  const updatedComment = await Comment.update(
    {
      ...req.body,
      updatedAt: new Date()
    },
    {
      where: {
        id: commentId
      },
      returning: true
    }
  );
  res.status(200).send(updatedComment);
};

const deleteComment = async (req, res) => {
  const deletedId = parseInt(req.params.commentId);
  await Comment.destroy({
    where: {
      id: deletedId
    }
  });
  res.status(200).send({ message: `Deleted comment with id of ${deletedId}!` });
};

module.exports = {
  getAllComments,
  getCommentsByUserId,
  getCommentsByEventId,
  createNewComment,
  updateComment,
  deleteComment
};
