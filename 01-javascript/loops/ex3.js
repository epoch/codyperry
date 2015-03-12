function assignGrade(score) {
  // return a grade depending on the score
  if (score > 90) {
    return 'A';
  } else {
    return 'F';
  }
}

for (var testScore = 0; testScore <= 100; testScore++) {
  console.log('For ' + testScore + ', you got grade ' + assignGrade(testScore));
}