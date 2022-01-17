const router = require('express').Router();

const controller = require('../controllers/eventController');

router.get('/', controller.getAllEvents);
router.get('/users/:eventId', controller.getUsersByEventId);
router.get('/users/event_code/:eventCode', controller.getUsersByEventCode);
router.get('/', controller.getAllEvents);
router.post('/', controller.createNewEvent);
router.put('/:eventId', controller.updateEvent);
router.delete('/:eventId', controller.deleteEvent);

module.exports = router;
