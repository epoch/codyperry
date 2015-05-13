console.log('it works');

// constructor function
function Foobar(title) {
  this.title = title;

  var hello = function(){
    console.log('hello world');
  }

  this.helloWorld = hello
}

// add a function to the objects the Foobar create
Foobar.prototype.greetings = function() {
  console.log(this);
}

function Account(amount) {
  this.balance = amount;
}

Account.prototype.deposit = function(amount) {
  this.balance = this.balance + amount
}

var bob = {};
bob.deposit = function() {

}