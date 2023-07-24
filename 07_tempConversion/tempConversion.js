const convertToCelsius = function(fTemp) {
  let longCelcius = (fTemp -32) * (5/9);
  let celcius = Math.round(longCelcius*10) / 10;
  return celcius;
};

const convertToFahrenheit = function(cTemp) {
  let longFahr= (cTemp * (9/5)) +32;
  let Fahr = Math.round(longFahr*10) / 10;
  return Fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
