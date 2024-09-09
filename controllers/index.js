const router = require('express').Router();
const apiRoutes = require('./api/notes.js');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;