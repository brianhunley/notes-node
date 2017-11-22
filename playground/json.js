// var obj = {
//   name: 'Brian'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Brian", "age": 53}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

console.log(typeof originalNote);
var originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);

