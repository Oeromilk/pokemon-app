// Import Dependecies
var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

var Template = require('./templates/navbar.jsx').Template;
var PokemonCollection = require('../models/pokemon.js').PokemonCollection;

var PokemonDetail = React.createClass({
  getInitialState: function(){
    return {
      pokeInfo: {},
      sprites: {}
    }
  },
  componentWillMount: function(){
    var pokeUrl = this.props.pokemonInfo.url;
    $.ajax(pokeUrl).then(response => {
      this.setState({pokeInfo: response});
      this.setState({sprites: response.sprites});
      if(response){
        $('.progress').hide();
      }
    });
  },
  render: function(){
    var info = this.state.pokeInfo;
    var sprites = this.state.sprites;
    console.log('info', info);
    return (
      <div id="rounded-border" className="col m6 offset-m3 z-depth-2 center-align">
        <h3>PokeInfo</h3>
        <div className="progress blue darken-4">
          <div className="indeterminate amber lighten-1"></div>
        </div>
        <div className="grey lighten-4">
          <img className="responsive-img" src={sprites.front_default} />
        </div>
        <div>
          Name: {info.name} Height: {info.height}m Weight: {info.weight}kg
        </div>
      </div>
    )
  }
});

var PokemonContainer = React.createClass({
  getInitialState: function(){
    return {
      pokemonInfo: {}
    }
  },
  componentWillMount: function(){
    $('.progress').show();
    var pokemonInfo = JSON.parse(localStorage.getItem('pokemonInfo'));
    this.setState({pokemonInfo: pokemonInfo});
  },
  render: function(){
    return (
      <Template>
        <div className="container">
          <div className="row">
            <PokemonDetail pokemonInfo={this.state.pokemonInfo} />
          </div>
        </div>
      </Template>
    )
  }
});

module.exports = {
  PokemonContainer: PokemonContainer
};
