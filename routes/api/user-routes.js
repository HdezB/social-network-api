const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    deleteFriend
} = require('../../controllers/user-controller')

// GET & POST set up @ /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// GET by Id, PUT & DELETE set up @ /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:userId/friends/:friendId')
    .put(addFriend)
    .delete(deleteFriend)
module.exports = router;
