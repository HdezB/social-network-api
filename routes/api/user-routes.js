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

// PUT to update a user's friend list & DELETE to remove a friend @ /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;
