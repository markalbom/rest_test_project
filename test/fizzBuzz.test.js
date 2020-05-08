let assert = require('assert');
let fizzBuzz = require('../scripts/fizzBuzz');

describe.only('fizzBuzz test', function () {

    it('fizzBuzz when fizz is a multiple of 3', function () {
        let fizzBuzzSet = fizzBuzz(33);
        assert.equal(fizzBuzzSet[5], 'fizz', 'not a multiple of 3');
    });

    it('fizzbuzz when buzz is a multiple of 5', function () {
        let fizzBuzzSet = fizzBuzz(45);
        assert.equal(fizzBuzzSet[4], 'buzz','not a multiple of 5');    
    });









})