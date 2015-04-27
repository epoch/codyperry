
// hoisting

var myName = 'cody perry';

doSomething();

doSomethingElse();

var doSomethingElse = function() {
  var foo = 'bar';
  var laterFoo = undefined;
  console.log('hi you');
  console.log(laterFoo);

  var laterFoo = 'laterBar';
}

function doSomething() {
  var foo2 = 'bar2';
  console.log('hi cody perry');
}