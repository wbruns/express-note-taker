const router = require('express').Router();
// import db.json data
const { notes } = require ('../../db/db.json');

// get all notes
router.get('/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
});

module.exports = router;