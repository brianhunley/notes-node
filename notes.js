console.log('Loading notes module (notes.js)...');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);    
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('Getting all notes');
};

const getNote = (title) => {
  console.log('Getting note', title);
}

const removeNote = (title) => {
  // fetch the notes
  let notes = fetchNotes();

  // filter notes, removing the one with title of argument
  var keepNotes = notes.filter((note) => note.title !== title);

  // save new notes array
  saveNotes(keepNotes);

  return notes.length !== keepNotes.length;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};