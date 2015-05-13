var wordCount = require('../wordCount.js');

describe("wordCount", function() {
  it("returns the number of words", function() {
    expect(wordCount('hello world')).toBe(2);
  });
  
  it("treats multiple space as one", function() {
    expect(wordCount('hello    world')).toBe(2);
  });

});