// ex1: recipe

var recipe = {
  title: 'the suprise',
  servings: 1,
  ingredients: ['cheese','mustard','vegemite','fresh cream']
};


console.log(recipe.title);
console.log('Serves', recipe['servings']);

console.log('ingredients');

for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}

// ex2: Reading List

var books = [
  {
    title: 'Eloquent Javascript',
    author: 'cannot pronounce',
    alreadyRead: true
  },
  {
    title: 'alice in wonderland',
    author: 'forgot',
    alreadyRead: true
  },
  {
    title: 'how to make a sandwich',
    author: 'andre',
    alreadyRead: false
  }
]

for (var i = 0; i < books.length; i++) {
  var book = books[i];

  var desc = book.title + ' by ' + book.author;

  if (book.alreadyRead) {
    console.log('you already read', desc);
  } else {
    console.log('you still need to read', desc);
  }
}

// ex3: Movies

var sharknado = {
  title: 'Sharknado',
  duration: 100,
  stars: ['that guy from 90210', 'the plastic surgery woman', 'sharks']
};

// function movieInfo(movie) {

// }

var movieInfo = function(movie) {
  var info = '';

  // info = info + movie.title
  info += movie.title;
  info += ' lasts for ' + movie.duration + ' minutes.';
  info += ' stars: ' + movie.stars.join(', ')

  console.log(info);
}

movieInfo(sharknado);


