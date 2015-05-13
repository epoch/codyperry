// take in as many numbers as arguments as you can
// and sum the total and print it out

// node ex3.js 1 2 3
// > 6

var total = 0;
for(var i = 2; i < process.argv.length; i++) {
  total += process.argv[i];
}

console.log(total);