var React = require('react');
var Navigation = require('Navigation');


var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <h1>first component</h1>
      {props.children}
    </div>
  );
}
module.exports = Main;
