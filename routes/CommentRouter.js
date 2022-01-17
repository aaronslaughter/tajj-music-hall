const router = require('express').Router();

const controller = require('../controllers/commentController');

router.get('/', controller.getAllComments);
router.get('/users/:userId', controller.getCommentsByUserId);
router.get('/events/:eventId', controller.getCommentsByEventId);
router.get('/', controller.getAllComments);
router.post('/', controller.createNewComment);
router.put('/:commentId', controller.updateComment);
router.delete('/:commentId', controller.deleteComment);

module.exports = router;
