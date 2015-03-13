function doSomething() {
  var userAge = document.getElementById('userAge').value;
  var titleElem = document.getElementById('title');

  // to convert string to integer use parseInt()
  if (parseInt(userAge, 10) >= 18) {
    titleElem.innerHTML = 'yay';
  } else {
    titleElem.innerHTML = 'boo';
  }
}

function doSomthingElse() {
  console.log('do something else');
}

// hey document can you get me the element with id 'btnEnter'
var btnEnter = document.getElementById('btnEnter');
btnEnter.addEventListener('click', doSomething);

