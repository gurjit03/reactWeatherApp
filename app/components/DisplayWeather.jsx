var React = require('react');

var DisplayWeather = ({temp, cityName}) => {
  return (
    <h5 className="text-center">Current weather in {cityName} is {temp}</h5>
  );
}

module.exports = DisplayWeather;
