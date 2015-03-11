/*
Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(kidCount, partner, geoLocation, jobTitle) {
  var fortune = 'you will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partner + ' with ' + kidCount + ' kids';

  console.log(fortune);
}


tellFortune(2, 'dt', 'melb', 'window wiper');
tellFortune(10, 'james', 'new zealand', 'car washer');
tellFortune(1, 'matt', 'richmond', 'dj');