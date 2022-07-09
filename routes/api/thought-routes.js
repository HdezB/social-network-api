const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');
const { route } = require('./user-routes');

// GET & POST set up @ /api/thoughts
router
route('/')
.get(getAllThoughts)
.post(createThought)

// GET by Id, PUT & DELETE set up @ /api/thoughts/:id

router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

module.exports = router;