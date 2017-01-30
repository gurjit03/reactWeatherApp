var React = require("react");
var GetWeatherForm = require("GetWeatherForm");
var DisplayWeather = require("DisplayWeather");
var OpenWeatherMap = require("OpenWeatherMap");

var Weather = React.createClass({
  getInitialState : function() {
    return {
      isLoading : false,
    }
  },

  handleGetWeather : function(cityName) {
    this.setState({isLoading : true});

    OpenWeatherMap.getTemp(cityName).then((temp) => {
      console.log(this);
      this.setState({
        cityName : cityName,
        temp : temp + '*C',
        isLoading : false
      })
    }).catch((err) => {
      this.setState({isLoading : true});
      alert(err);
    })
  },
  render : function() {
    var {isLoading,temp,cityName} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Loading the weather , please be patient....</h3>;
      }else if(temp && cityName) {
        return <DisplayWeather cityName={cityName} temp={temp}/>;
      }
    }

    return (
      <div className="weather-form-wrapper">
        <h1 className="text-center">Get Weather</h1>
        <GetWeatherForm onGetWeather={this.handleGetWeather}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
