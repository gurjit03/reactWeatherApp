var React = require('react');

var GetWeatherForm = React.createClass({
  getWeatherHandler : function(e) {
    e.preventDefault();

    var cityName = this.refs.cityName.value;
    console.log("-------------",cityName);
    if(cityName.length > 0) {
      this.refs.cityName.value = '';
      this.props.onGetWeather(cityName);
    }
  },
  render : function() {
    return (
      <div>
        <form onSubmit={this.getWeatherHandler} className="weather-form">
          <input type="text" ref="cityName" placeholder="enter your query"/>
          <br />

          <input type="submit" value="Get Weather"/>
        </form>
      </div>
    );
  }
})

module.exports = GetWeatherForm;
