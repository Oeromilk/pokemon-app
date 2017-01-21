var React = require('react');
var $ = require('jquery');
var $ = window.jQuery = require('jquery');

var NavBar = React.createClass({
  render: function(){
    return (
      <div className="navbar-fixed ">
        <nav>
          <div id="navbar-color" className="nav-wrapper blue lighten-5">
            <a href="#/" className="brand-logo center"><img id="header-logo" src="./images/pokemon-logo.png" /></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#poke-news/">PokeNews</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
});

var Template = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar />
          {this.props.children}
      </div>
    )
  }
});

module.exports = {
  Template: Template
};
