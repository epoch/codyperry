
$(document).ready(function() {

  // css rule .outer h1
  var $h1 = $('.outer h1').html('I AM VERY HUNGRY'); //.getElementsByTagName('h1')[0];
  // instead of using array notation, we still want a jquery object use eq
  // console.log(h1.eq(0).html('does this work?')); 
  // h1.html('I am very hungry') // div.innerHTML = 'I am very hungry'

  // .menu li:last-child
  var $lastListItemOfMenu = $('.menu li:last-child').html('join now');

  // var $newElement = $('<li>').addClass('cool').html('free stuff');  
  var $newElement = $('<li>', { 
    class: 'cool', 
    id: 'sweet', 
    style: 'background-color: red'
  }).html('works');


  // $('<li>free stuff</li>').appendTo('.menu');
  // $('.menu').prepend($newElement); // append

  $newElement.appendTo('.menu');
})

// window.onload = function() {
// var div = document.getElementsByClassName('outer')[0]; //.getElementsByTagName('h1')[0];
// console.log(div);
// };
