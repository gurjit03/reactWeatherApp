var React = require('react');
var {Link,IndexLink} = require('react-router');

var Navigation = React.createClass({
onSearch: function(e) {
  e.preventDefault();
  console.log('clicked')
  alert('not implemented yet');
},
render : function() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">My Weather App</li>
          <li>
            <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active">About</Link>
          </li>
          <li>
            <Link to="/examples" activeClassName="active">Examples</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li>
              <input type="search" refs="cityName" placeholder="Search Weather"/>
            </li>
            <li>
              <input type="button" className="button" value="get weather" />
            </li>
          </ul>
        </form>
      </div>
    </div>
    );
  }
})

module.exports = Navigation;
