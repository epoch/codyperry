/* 
Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NNÂ°C is NNÂ°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NNÂ°F is NNÂ°C."
*/

function celsiusToFahrenheit(celsius) {
  var fahrenheit = celsius * 1.8 + 32;
  console.log('celsius ' + celsius + ' is ' + fahrenheit + ' fahrenheit');
}

function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) / 1.8;
  console.log('fahrenheit ' + fahrenheit + ' is ' + celsius + ' celsius');
}

