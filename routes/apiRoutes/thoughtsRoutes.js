const router = require('express').Router();
const {findThoughts, createThoughts} = require('../../controllers/thoughtsController')

router.route('/').get(findThoughts);
router.route('/:userid').post(createThoughts);

module.exports = router;