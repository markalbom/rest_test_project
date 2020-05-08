const isPalindrome = (input) => {
    const reversedString = input.toString().split('').reverse().join('');
    if (input.toString() === reversedString) {
      return true;
    } else return false;
  };

  module.exports = isPalindrome;