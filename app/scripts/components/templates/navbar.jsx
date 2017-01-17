var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#/" className="brand-logo center">Poke Library</a>
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
