var axios = require('axios');
const APP_ID = 'aa836fe11c1c94e60f802b4bfa205713';
const WEATHER_MAP_API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${APP_ID}&units=metric`;

// APIkey aa836fe11c1c94e60f802b4bfa205713
module.exports = {
  getTemp : function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${WEATHER_MAP_API_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      debugger;
      if(res.data.cod && res.data.message) {
        alert(res.data.message);
        throw new Error(res.data.message)
      }else {
        return res.data.main.temp;
      }
    },function(res){
      alert(res.data.message);
      throw new Error(res.data.message);
    })
  }
}
