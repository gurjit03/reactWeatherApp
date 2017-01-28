var express = require('express');

// Now we have access to the entire express application

// create our app
var app = express();

// the app.use below will create the functionality to the application
// express.static will specify the folder name that we are going to expose to the web server
app.use(express.static('public'));

//start the server using app.listen()
app.listen(3000, function() {
  console.log("Express sever is running on port 3000");
})
