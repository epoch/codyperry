/* 
Write a function named calculateAge that:

takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years. outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

function calculateAge(birthYear, currentYear) {
  if (currentYear === undefined) {
    currentYear = new Date().getFullYear();
  }
  var age = currentYear - birthYear;
  console.log('you are ' + age);
}


calculateAge(1991);
calculateAge(1942, 2010);