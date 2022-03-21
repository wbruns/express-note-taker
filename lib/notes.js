const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
    const note = body;
    console.log(note);
    console.log(notes);
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function deleteNote(id, notesArr) {
    const notes = notesArr.filter(note => note.id !== id);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    console.log("deleteNote", notes);
    return notes;
}

module.exports = {
    createNewNote,
    validateNote,
    deleteNote
};