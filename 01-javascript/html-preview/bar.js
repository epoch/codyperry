function doSomething() {
  var userAge = document.getElementById('userAge').value;
  console.log('userAge: ', userAge);

  // to convert string to integer use parseInt()
}

// hey document can you get me the element with id 'btnEnter'
var btnEnter = document.getElementById('btnEnter');
btnEnter.addEventListener('click', doSomething);