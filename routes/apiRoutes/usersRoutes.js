const router = require('express').Router();
const {createUser, findUsers, findOneUser, updateUser, deleteUser, addFriend, deleteFriend} = require('../../controllers/usersController');

router.route('/').get(findUsers).post(createUser);
router.route('/:id').get(findOneUser).put(updateUser).delete(deleteUser);
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;