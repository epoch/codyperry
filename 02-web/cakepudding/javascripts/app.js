var game = {

  MAX_GUESSES: 8,
  guessedLetters: [],
  secret: [],
  puzzle: [],
  wordList: ['pudding','cake','hotdog','cakepudding'],

  test: function(){
    console.log(this);
  },

  init: function() {
    this.setSecret();
    this.setPuzzle();
  },

  setSecret: function() {
    game.secret = _.sample(game.wordList).split('');
  },

  setPuzzle: function() {
    game.puzzle = Array(game.secret.length+1).join('_').split('');
  },

  guessesLeft: function() {
    return game.MAX_GUESSES - game.guessedLetters.length;
  },

  guess: function(letter) {
    this.guessedLetters.push(letter);

    // work out the puzzle display
    // secret = ['c','a','k','e']
    // puzzle = ['_','_','_','_'] => ['_','_','k','_']
    // guess letter = 'k'

    _.each(this.secret, function(secretLetter, index) {
      
      console.log(this);
      if (secretLetter === letter) {
        this.puzzle[index] = letter;
      }
    }, this);
  }

}

window.onload = function() {

  game.init();

  var wordString = document.getElementById('wordString');
  wordString.innerHTML = game.puzzle;

  var guessesLeft = document.getElementById('guessesLeft');
  guessesLeft.innerHTML = game.guessesLeft();

  var letterField = document.getElementById('letterField'); 

  letterField.addEventListener('keyup', function(event) {
    // get the value of the input box when user press enter

    if (event.keyCode === 13) {
      var inputValue = this.value;
      // make the guess
      game.guess(inputValue);
      // clear the input box
      this.value ='';  
      // update screen
      guessesLeft.innerHTML = game.guessesLeft();   
    }
  });
}

// var myVal = "you can see me";

// function doSomething() {
//   // var myVal2 = "you can only see inside this function"
//   console.log(this); // global window object
// }

// var car1 = {
//   make: 'holden',
//   doSomething: doSomething
// }

// doSomething(); // 'this' refers to to window
// car1.doSomething(); // 'this' refers to car1

// var car2 = {
//   make: 'toyota'
// }

// var bob = {}


// doSomething.call(car2); // providing the context yourself