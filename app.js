console.log('Starting application (app.js)...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log(`Note added: The title is '${argv.title}' and the body is '${argv.body}'.`);    
  } else {
    console.log("Sorry, note not added. The note was in the database already.");
  }

} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed.' : 'Note not found.';
  console.log(message);
} else {
  console.log('Command not recognized.');
}