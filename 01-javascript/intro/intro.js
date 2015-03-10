console.log('this works');

// == != evil twins of === and !==

'' == '0';
false
0 == '';
true
false == 'false';
false
false == '0';
true

// always use triple === for comparison

0 === '';
false
false === '0';
false

var myAge = 3;

if (myAge >= 18) {
  console.log('welcome to the bar');
} else {
  console.log("you're too young! scram");
}


var theYear = new Date().getFullYear();

console.log('theYear: ', theYear);

if (theYear === 2015) {
  console.log("I'm present");
} else if (theYear > 2015) {
  console.log("Whoa! I'm in the future");
} else {
  console.log("Blast from the past");
}


