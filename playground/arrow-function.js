var square = (x) => {
  var result = x*x;
  return result;
};
console.log(square(9));

var squareShort = (x) => x * x;
console.log(squareShort(8));

var squareOneArg = x => x * x;
console.log(squareOneArg(3));

// difference between regular functions and arrow functions

var user = {
  name: 'Brian',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
}
// user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
