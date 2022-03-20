const router = require('express').Router();
// import functions
// const { getNotes, saveNote, deleteNote } = require('../../public/assets/js/index');
// import db.json data
const { notes } = require ('../../db/db.json');

// get all notes
router.get('/notes', (req, res) => {
    let results = notes;
    console.log(results);
    res.json(results);
});

module.exports = router;