// Import Dependecies
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

var Template = require('./templates/navbar.jsx').Template;
var PokemonCollection = require('../models/pokemon.js').PokemonCollection;

var PokemonContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <div>Test</div>
      </Template>
    )
  }
});

module.exports = {
  PokemonContainer: PokemonContainer
};
