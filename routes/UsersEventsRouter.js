const router = require('express').Router();
const controller = require('../controllers/usersEventsController');

router.get('/', controller.getAllUsersEvents);
router.post('/', controller.createNewUsersEvents);
router.put('/:id', controller.updateUsersEvents);
router.delete('/:id', controller.deleteUsersEvents);

module.exports = router;
