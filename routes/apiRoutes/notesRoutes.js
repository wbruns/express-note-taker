const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
// import functions
const { createNewNote, validateNote } = require('../../lib/notes');
// import db.json data
const { notes } = require ('../../db/db.json');

// get all notes
router.get('/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
});

router.post('/notes', (req, res) => {
    // set id
    req.body.id = uuidv4();
    console.log(req.body.id);

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;