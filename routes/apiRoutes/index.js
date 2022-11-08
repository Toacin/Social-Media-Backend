const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
// const thoughtsRoutes = require('./thoughtsRoutes');
// const reactionsRoutes = require('./reactionsRoutes');

router.use('/users', usersRoutes);

module.exports = router;