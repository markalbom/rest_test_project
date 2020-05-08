let assert = require('assert'); // Basic assertion library built in Node
// Assert documentation: https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message
// Mocha's describe() function defines a test suite
let isPalindrome = require('../scripts/isPalindrome'); 


describe('isPalindrome test', function () {
  // Function under test
 
  //first test to run under test suite (it keyword = individual mocha test)
  it('isPalindrome returns true for valid palindrome numbers', function () {
    assert.equal(
      isPalindrome(12321), // actual result
      true, // expected result
      'Expected isPalindrome to return true for palindromes' // Error message (optional), displayed in console when test fails
    );
  });
  
  it('isPalindrome returns false for non palindrome numbers', function () {
    assert.equal(isPalindrome(1232123), false);
  });
});


