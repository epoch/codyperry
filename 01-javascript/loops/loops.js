// var counter = 0;

// while (counter <= 5) {
//   // debugger;
//   console.log("the value of counter is " + counter);
//   counter++;
// }

// console.log('all done');

// var counter = 1;
// var maxValue = 20;

// while (counter <= maxValue) {

//   if ( (counter % 3 === 0) && (counter % 5 === 0) ) {
//     console.log('fizzbuzz');
//   } else if(counter % 3 === 0) {
//     console.log('fizz');
//   } else if (counter % 5 === 0) {
//     console.log('buzz');    
//   } else {
//     console.log(counter);
//   }

//   counter++;
// }

// var secretNumber = 26;
// // input from user will always be strings
// var guess = prompt('Enter a number');


// while (parseInt(guess,10) !== secretNumber) {
//   // guess again
//   console.log('wrong, you fail, guess again');
//   guess = prompt('Enter a number');
// }

// console.log('go cody perry');

var userChar = '$'; // money tree
var spaceChar = ' ';
var maxRow = 4;
var row = 1;
var charCount = 1;

while (row <= maxRow) {
  var line = spaceChar.repeat(maxRow - row) + userChar.repeat(charCount) + spaceChar.repeat(maxRow - row);
  console.log(line);
  row++;
  charCount += 2;
}




















// var charCount = 1;

// while (row <= maxRow) {
//   var space = maxRow - row;
//   console.log(' '.repeat(space) + userChar.repeat(charCount) + ' '.repeat(space));
//   row++;
//   charCount += 2;
// }