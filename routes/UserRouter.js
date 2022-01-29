const router = require('express').Router();
const controller = require('../controllers/userController');
const middleware = require('../middleware');

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getAllUsers
);
router.get(
  '/events/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getEventsByUserId
);
router.get(
  '/events/name/:userName',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getEventsByUserName
);
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createNewUser
);
router.put(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateUser
);
router.delete(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteUser
);

module.exports = router;
