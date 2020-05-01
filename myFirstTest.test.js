let assert = require('assert'); // Basic assertion library built in Node
// Assert documentation: https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message
// Mocha's describe() function defines a test suite

describe('isPalindrome test', function () {
  // Function under test
  const isPalindrome = (input) => {
    const reversedString = input.toString().split('').reverse().join('');
    if (input.toString() === reversedString) {
      return true;
    } else return false;
  };
  //first test to run under test suite (it keyword = mocha test)
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

describe('farenheitToCelsius test', function () {
  const farenheitToCelsius = (tempF) => {
    let convertedToCelsius = ((tempF - 32) / 1.800);
    return convertedToCelsius;
   };
    
   it('farenheitToCelsius returns valid conversion', function () {
    assert.true(farenheitToCelsius(32), true)
   })    

   it('farenheitToCelsius returns invalid conversion with non-number', function () {
       assert.true(farenheitToCelsius("seven"), false)
   })

    });