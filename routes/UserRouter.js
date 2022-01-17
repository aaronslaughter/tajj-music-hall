const router = require('express').Router();
const controller = require('../controllers/userController');

router.get('/', controller.getAllUsers);
router.get('/events/:userId', controller.getEventsByUserId);
router.get('/events/name/:userName', controller.getEventsByUserName);
router.post('/', controller.createNewUser);
router.put('/:userId', controller.updateUser);
router.delete('/:userId', controller.deleteUser);

module.exports = router;
