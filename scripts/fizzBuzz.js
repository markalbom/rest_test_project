function fizBuzz(maxNum){
    let array = [];
    for (var i = 1; i <= maxNum; i++){
      let number = i;
      if ((number % 3 === 0) && (number % 5 == 0)){
        array.push("FizzBuzz");
      } else if (number % 3 === 0){
        array.push("fizz");
      } else if (number % 5 === 0){
        array.push("buzz");
          } else {
            array.push(number);
          }
      }
      return array;
    }

    module.exports = fizBuzz;