var express = require('express');

// Now we have access to the entire express application

// create our app
var app = express();

// The env variable willl be supplying the port number
const PORT = process.env.PORT || 3000;

// the app.use below will create the functionality to the application
// express.static will specify the folder name that we are going to expose to the web server
app.use(express.static('public'));

app.use(function(req, res, next) {
  if(req.header['x-forwarded-proto'] == 'http') {
    ///Request is for http
    next();
  }else {
    res.redirect('http://'+req.hostname+req.url);
  }
})
// Https request will be mapped to the http

//start the server using app.listen()
app.listen(PORT, function() {
  console.log("Express sever is running on port "+PORT);
})
