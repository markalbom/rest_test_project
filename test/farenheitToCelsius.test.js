let assert = require('assert');
let farenheitToCelsius = require('../scripts/farenheitToCelsius');

//beginning of test suite for 'Farenheit to Celsius' function
describe('farenheitToCelsius test', function () {
    
    it('farenheitToCelsius returns valid conversion', function () {
     assert.deepEqual(farenheitToCelsius(32), true)
    })    
 
    it('farenheitToCelsius returns invalid conversion with non-number', function () {
        assert.deepEqual(farenheitToCelsius("seven"), NaN)
    })
 
     });
 
