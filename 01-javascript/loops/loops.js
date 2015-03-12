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

// var userChar = '$'; // money tree
// var spaceChar = ' ';
// var maxRow = 4;
// var row = 1;
// var charCount = 1;

// while (row <= maxRow) {
//   var line = spaceChar.repeat(maxRow - row) + userChar.repeat(charCount) + spaceChar.repeat(maxRow - row);
//   console.log(line);
//   row++;
//   charCount += 2;
// }


// var count = 0;

// while (count < instruments.length) {
//   console.log(instruments[count]);
//   count++;
// }

// for (assignment; end condition; increment)

var instruments = ['guitar','piano','cajon'];

for (var count = instruments.length; count > 0; count--) {
  console.log('The number ' + (count) + ' is ' + instruments[count-1]);
}

// The number 1 elem is guitar
// The number 2 elem is piano
// The number 3 elem is cajon













