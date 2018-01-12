// console.log('Loading notes module (notes.js)...');

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
  return fetchNotes();
};

const getNote = (title) => {
  // fetch the notes
  var notes = fetchNotes();

  // filter notes, getting the one with the title of argument
  var foundNote = notes.filter((note) => note.title === title);

  // return the note
  return foundNote[0];
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

const logNote = (note) => {
  // break on this line and use repl to output note
  // use read command with --title
  debugger;

  console.log(`The title is '${note.title}' and the body is '${note.body}'.`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};