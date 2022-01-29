const router = require('express').Router();
const middleware = require('../middleware');
const controller = require('../controllers/commentController');

router.get('/', controller.getAllComments);
router.get('/users/:userId', controller.getCommentsByUserId);
router.get('/events/:eventId', controller.getCommentsByEventId);
router.get('/', controller.getAllComments);
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createNewComment
);
router.put(
  '/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateComment
);
router.delete(
  '/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteComment
);

module.exports = router;
