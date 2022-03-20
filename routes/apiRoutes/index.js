const router = require('express').Router();
// import routes for notes page
const notesRoutes = require('../apiRoutes/notesRoutes');

router.use(notesRoutes);

module.exports = router;