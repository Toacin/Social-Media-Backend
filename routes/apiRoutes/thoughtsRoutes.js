const router = require('express').Router();
const {findThoughts, createThoughts, findSingleThought, updateThought, deleteThought, createReaction, deleteReaction} = require('../../controllers/thoughtsController')

router.route('/').get(findThoughts).post(createThoughts).put(updateThought).delete(deleteThought);
router.route('/:id').get(findSingleThought);
router.route('/:id/reactions').post(createReaction).delete(deleteReaction);


module.exports = router;