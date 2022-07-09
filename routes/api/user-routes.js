const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
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

module.exports = router;