const router = require('express').Router();
const middleware = require('../middleware');

const controller = require('../controllers/eventController');

router.get('/', controller.getAllEvents);
router.get('/users/:eventId', controller.getUsersByEventId);
router.get('/users/event_code/:eventCode', controller.getUsersByEventCode);
router.get('/', controller.getAllEvents);
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createNewEvent
);
router.put(
  '/:eventId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateEvent
);
router.delete(
  '/:eventId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteEvent
);

module.exports = router;
