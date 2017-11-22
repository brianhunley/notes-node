console.log('Starting application (app.js)...');

const fs = require('fs');
const os = require('os');

const _ = require('lodash');

const notes = require('./notes');


// this one causes an error message in nodejs v7 or greater of not having a callback in an asyn function
// fs.appendFile('greetings.txt', 'Hello world!');

// better option one
/*
fs.appendFile('greetings.txt', 'Hello world!', function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});
*/

// better option two
// fs.appendFileSync('greetings.txt', 'Hello world!');

// var user = os.userInfo();
// console.log(user);
// console.log('Well, Hello, ' + user.username + '! It\'s great to see you!');

/*
fs.appendFile('greetings.txt', 'Well, Hello, ' + user.username + '! It\'s great to see you!', function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});
*/

// console.log(`Hello, ${user.username}! You are ${notes.age}.`);

var result = notes.addNote();
console.log(result);

var addedNumbers = notes.add(10, 20);
console.log('Result:', addedNumbers);

// playing with lodash
console.log(_.isString(true));
console.log(_.isString('Brian'));

const filteredArray = _.uniq(['Brian', 'Cecil', 'Brian', 1, 2, true, false, true, 1, 5]);
console.log(filteredArray);