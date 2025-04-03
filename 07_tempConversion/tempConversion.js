const convertToCelsius = function(feh_num) {
    let cels = (feh_num - 32) * 5/9;
    return Math.round(cels * 10) / 10;
  };

const convertToFahrenheit = function(cels) {
  let feh = (cels * 9/5) + 32;
  return Math.round(feh * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
