var React = require('react');

var DisplayWeather = ({temp, cityName}) => {
  return (
    <h1>Current weather in {cityName} is {temp}</h1>
  );
}

module.exports = DisplayWeather;
