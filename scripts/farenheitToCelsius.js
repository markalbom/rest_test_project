const farenheitToCelsius = (tempF) => {
    let convertedToCelsius = ((tempF - 32) / 1.800);
    return convertedToCelsius;
   };

   module.exports = farenheitToCelsius;