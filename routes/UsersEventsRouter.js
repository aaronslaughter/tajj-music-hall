const router = require('express').Router();
const controller = require('../controllers/usersEventsController');
const middleware = require('../middleware');

router.get('/', controller.getAllUsersEvents);
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createNewUsersEvents
);
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateUsersEvents
);
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteUsersEvents
);

module.exports = router;
